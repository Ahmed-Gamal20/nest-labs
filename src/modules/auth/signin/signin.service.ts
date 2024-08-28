import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import { SignInDTO } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class SigninService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, private _jwtService:JwtService) {}

    async signin(info:SignInDTO){
let user=await this.userModel.findOne({email:info.email})
if(user && await bcrypt.compare(info.password,user.password)){

let token=this._jwtService.sign({name:user.name,email:user.email} , {secret:"gaher"})

    return {message:'welcome back',toke:token}

}else{
     throw new HttpException('email or password is incorrected',HttpStatus.NOT_FOUND)
}
    }
}
