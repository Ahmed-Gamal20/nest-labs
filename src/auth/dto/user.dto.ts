/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class UserDto {


    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @MaxLength(10)
    @MinLength(3)
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;
}
