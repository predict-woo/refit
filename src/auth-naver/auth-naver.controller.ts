import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  SerializeOptions,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AuthNaverService } from './auth-naver.service';
import { AuthNaverLoginDto } from './dto/auth-naver-login.dto';
import { LoginResponseType } from 'src/auth/types/login-response.type';

@Controller('auth-naver')
export class AuthNaverController {
  constructor(
    private readonly authService: AuthService,
    private readonly authNaverService: AuthNaverService,
  ) {}

  // @SerializeOptions({
  //   groups: ['me'],
  // })
  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // async login(@Body() loginDto: AuthNaverLoginDto): Promise<LoginResponseType> {
  //   const socialData = await this.authNaverService.getProfileByToken(loginDto);

  //   return this.authService.validateSocialLogin('google', socialData);
  // }

  @SerializeOptions({
    groups: ['me'],
  })
  @Get('callback')
  @HttpCode(HttpStatus.OK)
  async callback(@Query() callbackDto: AuthNaverLoginDto) {}
}
