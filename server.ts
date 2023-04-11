// @ts-ignore
import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/shop'
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/src/server-call'
import { AuthServiceHandlers } from './proto/shopPackage/AuthService'
import { User } from './proto/shopPackage/User'
import { AuthResponse } from './proto/shopPackage/AuthResponse'

const PORT = 8082
const PROTO_FILE = './proto/shop.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const shopPackage = grpcObj.shopPackage


const users: User[] = []

function main() {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })
}

function getServer() {
  const server = new grpc.Server()

  server.addService(shopPackage.AuthService.service, {
    // 'AuthUser': (call, callback) => {
    //   console.log(call.request)
    // },
    'AuthUser': AuthUser,
  } as unknown as AuthServiceHandlers)

  return server
}

main()

function AuthUser(call: ServerUnaryCall<User, AuthResponse>, callback: sendUnaryData<AuthResponse>) {
  const requestData = call.request
  console.info(requestData)
  if (!requestData.name || !requestData.email || !requestData.password) {
    callback({
      code: 400,
      details: 'Не заполнены обязательные поля',
    })
    return
  }

  if (users.find((user) => user.name === requestData.name)) {
    callback({
      code: 400,
      details: 'Такой пользователь уже существует',
    })
    return
  }

  users.push(requestData)
  console.log(users.length)

  callback(null, { id: (users.length).toString() })
}