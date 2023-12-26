import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthNaverCallbackDto {
  @ApiProperty({ example: '21oRCTQqdjC020hPom' })
  @IsNotEmpty()
  code: string;

  state: string;
}
