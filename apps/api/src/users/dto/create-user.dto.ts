import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  githubId!: string;

  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}