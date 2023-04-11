import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _shopPackage_AuthServiceClient, AuthServiceDefinition as _shopPackage_AuthServiceDefinition } from './shopPackage/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  shopPackage: {
    AuthResponse: MessageTypeDefinition
    AuthService: SubtypeConstructor<typeof grpc.Client, _shopPackage_AuthServiceClient> & { service: _shopPackage_AuthServiceDefinition }
    User: MessageTypeDefinition
  }
}

