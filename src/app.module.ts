import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RideModule } from './ride/ride.module';

@Module({
  imports: [
    AuthModule, 
    RideModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".auth.env"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
