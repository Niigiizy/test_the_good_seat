import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { CourseSearchModule } from './course-search/course-search.module';

@Module({
  imports: [AuthModule, CourseSearchModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
