import { registerAs } from '@nestjs/config';
import { FirebaseConfig } from './firebase-config.type';
import { IsOptional, IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
  @IsString()
  @IsOptional()
  FIREBASE_PROJECT_ID: string;

  @IsString()
  @IsOptional()
  FIREBASE_PRIVATE_KEY: string;

  @IsString()
  @IsOptional()
  FIREBASE_CLIENT_EMAIL: string;
}

export default registerAs<FirebaseConfig>('firebase', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  };
});
