import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import {Student} from "../student/student.entity";

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  students: string[];
}
