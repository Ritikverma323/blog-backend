import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVisitorDto {
  @ApiProperty({ example: '123', description: 'ID of the post' })
  @IsString()
  @IsNotEmpty()
  postId: string;

  @ApiProperty({ example: 'u456', description: 'ID of the user' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
