import { Module } from '@nestjs/common';
import { AuthFirebaseController } from './auth-firebase.controller';
import { AuthFirebaseService } from './auth-firebase.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthFirebaseService],
  exports: [AuthFirebaseService],
  controllers: [AuthFirebaseController],
})
export class AuthFirebaseModule {}
