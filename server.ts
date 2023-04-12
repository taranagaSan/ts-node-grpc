// @ts-ignore
import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/shop'
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/src/server-call'
import { AuthServiceHandlers } from './proto/shopPackage/AuthService'
import { User } from './proto/shopPackage/User'
import { AuthResponse } from './proto/shopPackage/AuthResponse'
import { Status } from '@grpc/grpc-js/src/constants'

const PORT = 8082
const HOST = '0.0.0.0'
const PROTO_FILE = './proto/shop.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const shopPackage = grpcObj.shopPackage


const users: User[] = []

function main() {
  const server = getServer()

  server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(),
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

  const serviceHandler: AuthServiceHandlers = {
    'AuthUser': AuthUser,
  } as unknown as AuthServiceHandlers

  server.addService(shopPackage.AuthService.service, serviceHandler)

  return server
}

main()


function AuthUser(call: ServerUnaryCall<User, AuthResponse>, callback: sendUnaryData<AuthResponse>) {
  const requestData = call.request
  console.info(requestData)
  if (!requestData.name || !requestData.email || !requestData.password) {
    callback({
      code: Status.INVALID_ARGUMENT,
      details: 'Не заполнены обязательные поля',
    })
    return
  }

  if (users.find((user) => user.name === requestData.name)) {
    callback({
      code: Status.ALREADY_EXISTS,
      details: 'Такой пользователь уже существует',
    })
    return
  }

  users.push(requestData)
  console.log(users.length)

  callback(null, { id: (users.length).toString() })
}