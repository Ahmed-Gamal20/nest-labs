import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps:true,versionKey:false})
export class Usersign{

    // @Prop({required:true})
    // name:string;

    @Prop({required:true,unique:true})
    email:string;


    @Prop({required:true})
    password:string;
    
    // @Prop({ required: true, enum: ['user', 'admin', 'auther'], default: 'user' })
    // role: string;
    


}

export const UsersignSchema = SchemaFactory.createForClass(Usersign);
