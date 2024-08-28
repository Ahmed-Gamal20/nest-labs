import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, NotContains } from "class-validator";

export class SignUpDTO {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    @NotContains(" ")
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @NotContains(" ")
    email: string;

    @IsString()
    @MinLength(3)
    @MaxLength(8)
    password: string;
}



export class SignInDTO {

   

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @NotContains(" ")
    email: string;

    @IsString()
    @MinLength(3)
    @MaxLength(8)
    password: string;
}