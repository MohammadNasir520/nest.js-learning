import { IsString, IsInt } from 'class-validator';

export class User {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  location: string;

  @IsString()
  email: string;
}
