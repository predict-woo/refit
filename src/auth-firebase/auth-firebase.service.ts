import { Injectable } from '@nestjs/common';
import { AuthFirebaseLoginDto } from './dto/auth-firebase-login.dto';
import { SocialInterface } from 'src/social/interfaces/social.interface';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';
import admin, { ServiceAccount } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
@Injectable()
export class AuthFirebaseService {
  private firebaseConfig: ServiceAccount;

  constructor(private configService: ConfigService<AllConfigType>) {
    this.firebaseConfig = {
      projectId: configService.get('firebase.projectId', { infer: true }),
      privateKey: configService.get('firebase.privateKey', { infer: true }),
      clientEmail: configService.get('firebase.clientEmail', { infer: true }),
    };

    console.log(this.firebaseConfig);

    admin.initializeApp({
      credential: admin.credential.cert(this.firebaseConfig),
    });
  }

  async getProfileByToken(
    loginDto: AuthFirebaseLoginDto,
  ): Promise<SocialInterface> {
    const decodedToken: DecodedIdToken = await admin
      .auth()
      .verifyIdToken(loginDto.idToken);
    if (!decodedToken) {
      throw new Error('Invalid token');
    }

    console.log(decodedToken);

    return {
      id: decodedToken.name,
      email: decodedToken.email,
    };
  }
}
