/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @Post("reg")
    reg(@Body() newUser: UserDto) {
        return this._authService.reg(newUser);
    }

    @Get("login")
    login(@Body() user: UserDto) {
        return this._authService.login(user);
    }
}
