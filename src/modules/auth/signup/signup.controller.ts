import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignUpDTO } from '../dto/auth.dto';

@Controller('signup')
export class SignupController {

    constructor(private _signupService: SignupService) { }

    // @Get()
    // getusers(){
    //     return this._signupService.getusers()
    // }

    @Post()
    signup(@Body() body:SignUpDTO ) {
        return this._signupService.signup(body)
    }
}
