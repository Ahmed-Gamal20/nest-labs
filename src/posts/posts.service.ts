import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/core/schemas/posts.schema';
import addPostDTO, { ParamDTO } from './dto/post.dto';

@Injectable()
export class PostsService {
 
    constructor(@InjectModel(Post.name) private postModel: Model<Post>){ }
    //
    //get
    //
    async getAllPosts(){
        let allPosts=await this.postModel.find()
        return {message:"done",allPosts}
    }

    //
    //post
    //
    async addPosts(@Body() body:addPostDTO){
        let added= await this.postModel.create(body)
        return {message:"add new post success", added}
    }
    // 
    //update
    //
    async updatePost(@Body() body:addPostDTO,id:string){
    let updated=await this.postModel.findByIdAndUpdate(id,body,{new:true})
    return {message:"updated success", updated}
    }
    // 
    //update
    //
    async deletePost(id:string){
        let deleted=await this.postModel.findByIdAndDelete(id)
        return {message:"deleted success", deleted}
        }
    
}
