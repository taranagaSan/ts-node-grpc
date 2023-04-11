// Original file: proto/shop.proto


// Original file: proto/shop.proto

export enum _shopPackage_User_UserType {
  USER_TYPE_UNSPECIFIED = 0,
  USER_TYPE_USER = 1,
}

export interface User {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'address'?: (string);
  '_address'?: "address";
}

export interface User__Output {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'address'?: (string);
}
