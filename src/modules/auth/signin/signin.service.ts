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
    if (user.role === info.role) {
        // إنشاء التوكن مع تضمين المعلومات الضرورية
        const token = this._jwtService.sign(
          { name: user.name, email: user.email,id:user._id , role: user.role }, // يمكن تضمين `role` في التوكن حسب الحاجة
          { secret: "gaher" }
        );

        return { message: 'Welcome back', token: token };
      } else {
        // إذا كان الدور غير صحيح
        throw new HttpException('Role is incorrect', HttpStatus.FORBIDDEN);
      }
    } else {
      // إذا كان البريد الإلكتروني أو كلمة المرور غير صحيحين
      throw new HttpException('Email or password is incorrect', HttpStatus.NOT_FOUND);
    }
    }
}
