import { Injectable } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class BlogsService {
    blogs=[
        {
            title:"blog 1",
            id:1
        },
        {
            title:"blog 2",
            id:2
        }, 
        {
            title:"blog 3",
            id:3
        }, {
            title:"blog 4",
            id:4
        }, {
            title:"blog 5",
            id:5
        }
    ]
    constructor(){
        
    }
    getAllBlogs(){
        return this.blogs
    }
    addAllBlogs(body){
        this.blogs.push(body)
       return {message:"added success",Blogs: this.blogs}
       
    }
    getBlogById(id){
        return this.blogs.find(ele=>ele.id==id)
    }
    updateAllBlogs(){
        return "Update All Blogs"
    }
    deleteAllBlogs(){
        return "Delete All Blogs"
    }
}
