import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';
import { AuthNaverLoginDto } from './dto/auth-naver-login.dto';
import { SocialInterface } from 'src/social/interfaces/social.interface';

@Injectable()
export class AuthNaverService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  // async getProfileByToken(
  //   loginDto: AuthNaverLoginDto,
  // ): Promise<SocialInterface> {

  //   const data =

  //   return {
  //     id: data.sub,
  //     email: data.email,
  //   };
  // }
}
