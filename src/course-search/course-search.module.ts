import { Module } from '@nestjs/common';
import { CourseSearchController } from './course-search.controller';
import { CourseSearchService } from './course-search.service';

@Module({
  controllers: [CourseSearchController],
  providers: [CourseSearchService]
})
export class CourseSearchModule {}
