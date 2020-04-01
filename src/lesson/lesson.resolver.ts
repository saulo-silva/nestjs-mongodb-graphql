import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssingStudentsToLessonInput } from './assing-students-to-lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(returns => LessonType)
  createLession(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assingStudentsToLesson(
    @Args('assingStudentsToLessonInput')
    assingStudentsToLessonInput: AssingStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assingStudentsToLessonInput;

    return this.lessonService.assingStudentsToLesson(lessonId, studentIds);
  }
}
