import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthFirebaseLoginDto {
  @ApiProperty({ example: 'abc' })
  @IsNotEmpty()
  idToken: string;
}
