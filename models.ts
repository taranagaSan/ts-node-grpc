import { _shopPackage_User_UserType, User } from './proto/shopPackage/User'

export class UserModel implements User {
    name: string;
    email: string;
    password: string
    address: string;
    type: _shopPackage_User_UserType

    constructor(user: User) {
        this.name = user.name ?? ''
        this.email = user.email ?? ''
        this.password = user.password ?? ''
        this.address = user.password ?? ''
        this.type = _shopPackage_User_UserType.USER_TYPE_USER
    }
}