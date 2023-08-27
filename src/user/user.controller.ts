import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id/comments')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}

// {
//   "name": "sushil",
//   "email": "ram@gmail.com",
//   "password": "$2b$10$s.X20yGIj5ZulrtHQO3gIOnKpn48c26hxm6HD.tyDhdK7MeNEqRI.",
//   "id": 1
// }
