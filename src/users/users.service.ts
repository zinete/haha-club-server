import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.USER_REPOSITORY.create<User>(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.USER_REPOSITORY.findAll<User>();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.USER_REPOSITORY.update(updateUserDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.USER_REPOSITORY.destroy({
      where: {
        id,
      },
    });
  }
  word() {
    return 'word';
  }
}
