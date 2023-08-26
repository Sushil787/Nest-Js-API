import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsNumberString()
  phoneNo: string;
}
