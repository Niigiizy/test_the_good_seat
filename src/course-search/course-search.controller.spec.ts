import { Test, TestingModule } from '@nestjs/testing';
import { CourseSearchController } from './course-search.controller';

describe('CourseSearchController', () => {
  let controller: CourseSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseSearchController],
    }).compile();

    controller = module.get<CourseSearchController>(CourseSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
