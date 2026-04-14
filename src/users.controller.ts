import { Controller, Get, Post, Body,  HttpCode, HttpStatus, Param } from "@nestjs/common";

@Controller('/users')
export class UsersController {
    @Get('/profile')
    @HttpCode(HttpStatus.OK)
    getProfile() {
        return {
            name: 'John Doe',
            email: 'waseemtasawar96@gmail.com'
        };
    }
    @Get('/videos/:id')
    getVideos(@Param('id') params:number) {
        console.log(params)
        return "videos";
    }

    @Post('/video')
    addVideo(@Body() body:any) {
        console.log(body)
        return {success: true}
    }

}