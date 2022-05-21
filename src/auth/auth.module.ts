import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [HttpModule], 
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
