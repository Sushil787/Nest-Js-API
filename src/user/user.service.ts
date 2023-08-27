import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto, UserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}
  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id: id } });
  }

  async create(createUser: UserDto) {
    const user = await this.userRepo.create(createUser);
    return this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userRepo.update(id, updateUserDto);

    return updatedUser.generatedMaps;
  }
}
