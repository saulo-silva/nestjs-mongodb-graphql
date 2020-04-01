import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {LessonType} from "./lesson.type";
import {LessonService} from "./lesson.service";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ) {
    }
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'gsfgsfd',
            name: 'Saulo Silva',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }

    @Mutation(returns => LessonType)
    createLession(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string,
    ) {
        return this.lessonService.createLesson(name, startDate, endDate)
    }
}
