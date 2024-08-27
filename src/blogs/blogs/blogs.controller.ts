import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDTO } from 'src/blogs/dto/blogs.dto';

@Controller('blogs')
export class BlogsController {
    constructor(private readonly _blogsService:BlogsService){

    }
    @Get()
    getBlogs(){
        return this._blogsService.getAllBlogs()
    }
    @Post()
    postBlogs(@Body() body:BlogDTO){
        return this._blogsService.addAllBlogs(body)
        // return{body}
    }
    @Get(':id')
    getBlogsById(@Param('id') id:any){
        return this._blogsService.getBlogById(id)
    }
    @Put()
    updateBlogs(){
        return this._blogsService.updateAllBlogs()
    }
    @Delete()
    deleteBlogs(){
        return this._blogsService.deleteAllBlogs()
    }
}
