/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
    users = [
        {
            id: 1,
            name: "Ahmed Gaher",
            email: "Gaher@gmail.com",
            password: "1234"
        }
    ]

    reg(bodyUser: UserDto){
        this.users.push(bodyUser)
        return { message: "added success", users: this.users }

    }

    login(user: any){
        const findUser = this.users.find((ele) => ele.email == user.email);
        if (findUser) {
            if (findUser.password == user.password) {
                return { message: "Welcome back" }
            } else {
                return { message: "incorrect password"}
            }
        } else {
            return { message: "incorrect Email" }
        }
    }
}
