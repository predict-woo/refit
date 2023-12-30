import { Module } from '@nestjs/common';
import { AuthFirebaseController } from './auth-firebase.controller';
import { AuthFirebaseService } from './auth-firebase.service';

@Module({
  controllers: [AuthFirebaseController],
  providers: [AuthFirebaseService]
})
export class AuthFirebaseModule {}
