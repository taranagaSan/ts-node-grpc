// Original file: proto/shop.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthResponse as _shopPackage_AuthResponse, AuthResponse__Output as _shopPackage_AuthResponse__Output } from '../shopPackage/AuthResponse';
import type { User as _shopPackage_User, User__Output as _shopPackage_User__Output } from '../shopPackage/User';

export interface AuthServiceClient extends grpc.Client {
  AuthUser(argument: _shopPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  AuthUser(argument: _shopPackage_User, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  AuthUser(argument: _shopPackage_User, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  AuthUser(argument: _shopPackage_User, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  authUser(argument: _shopPackage_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  authUser(argument: _shopPackage_User, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  authUser(argument: _shopPackage_User, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  authUser(argument: _shopPackage_User, callback: (error?: grpc.ServiceError, result?: _shopPackage_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  AuthUser: grpc.handleUnaryCall<_shopPackage_User__Output, _shopPackage_AuthResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  AuthUser: MethodDefinition<_shopPackage_User, _shopPackage_AuthResponse, _shopPackage_User__Output, _shopPackage_AuthResponse__Output>
}
