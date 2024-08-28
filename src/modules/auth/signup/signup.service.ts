import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class SignupService {
    // users=[
        
    // ]
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    // getusers(){
    //     return this.users
    // }
    async signup(body:SignUpDTO) {
    // this.users.push(body)
   let user=await this.userModel.findOne({email:body.email})
   if(user) throw new HttpException('email is already register', HttpStatus.FORBIDDEN);

body.password = await bcrypt.hash(body.password, 8);
   let adduser =await this.userModel.insertMany(body)
        return {message:'added success',adduser}
    }
}
