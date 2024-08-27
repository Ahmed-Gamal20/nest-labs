import { IsEmpty, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, NotContains } from "class-validator";

export class BlogDTO {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    
    title: string;


    
    @IsNumber()
    @IsNotEmpty()
    id: number;
}