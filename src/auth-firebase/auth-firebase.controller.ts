import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  SerializeOptions,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { AuthFirebaseService } from './auth-firebase.service';
import { AuthFirebaseLoginDto } from './dto/auth-firebase-login.dto';
import { LoginResponseType } from 'src/auth/types/login-response.type';

@ApiTags('Auth')
@Controller({
  path: 'auth/firebase',
  version: '1',
})
export class AuthFirebaseController {
  constructor(
    private readonly authService: AuthService,
    private readonly authFirebaseService: AuthFirebaseService,
  ) {}

  @SerializeOptions({
    groups: ['me'],
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: AuthFirebaseLoginDto,
  ): Promise<LoginResponseType> {
    const socialData =
      await this.authFirebaseService.getProfileByToken(loginDto);
    return this.authService.validateSocialLogin('firebase', socialData);
  }
}
