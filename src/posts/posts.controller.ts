import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import  addPostDTO, { ParamDTO }  from './dto/post.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {

    constructor(private _postsService:PostsService){ }
@Get()
getAllPosts(){
    return this._postsService.getAllPosts()
}

@Post()
addPost(@Body() body:addPostDTO){
    return this._postsService.addPosts(body)
}

@Put(':id')
updatePost(@Body() body:addPostDTO, @Param() param:ParamDTO){
    return this._postsService.updatePost(body,param.id)
}

@Delete(':id')
deletePost( @Param() param:ParamDTO){
    return this._postsService.deletePost(param.id)
}
}
