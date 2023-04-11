// Original file: proto/shop.proto


// Original file: proto/shop.proto

export enum _shopPackage_User_UserType {
  USER_TYPE_UNSPECIFIED = 'USER_TYPE_UNSPECIFIED',
  USER_TYPE_USER = 'USER_TYPE_USER',
}

export interface User {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'address'?: (string);
  'type'?: (_shopPackage_User_UserType | keyof typeof _shopPackage_User_UserType);
  '_address'?: "address";
}

export interface User__Output {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'address'?: (string);
  'type'?: (keyof typeof _shopPackage_User_UserType);
}
