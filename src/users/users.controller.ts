import { Controller, Get, Param, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // @Post('post')
    // create(@Body() { name, lastname }: { name: string, lastname: string }): { name: string, lastname: string } {
    //     return {
    //         name,
    //         lastname
    //     };
    // }
    
    @Put('update/:id')
    update(@Param() { id }: { id: string }): string{
        return id;
    }

    @Get('user')
    findOne(@Query() { id }: { id: string }): string{
        return id;
    }
}