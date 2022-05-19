import { Test, TestingModule } from '@nestjs/testing';
import { CourseSearchService } from './course-search.service';

describe('CourseSearchService', () => {
  let service: CourseSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSearchService],
    }).compile();

    service = module.get<CourseSearchService>(CourseSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
