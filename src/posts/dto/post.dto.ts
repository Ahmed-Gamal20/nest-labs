import { IsMongoId, IsString, MaxLength, MinLength } from "class-validator";


 export default class addPostDTO{


    @IsString()
    @MinLength(3)
    @MaxLength(50)
    title:string;

    @IsString()
    @MinLength(3)
    @MaxLength(2000)
    info:string;
  

    @IsMongoId()
    userId:string;
 }

 export class ParamDTO{
    @IsMongoId()
    id:string;
 }