import { EntityHelper } from 'src/utils/entity-helper';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { WorkoutStyle } from './workoutStyle.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Info extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  yoe: number;

  @OneToMany(() => WorkoutStyle, (WorkoutStyle) => WorkoutStyle.info)
  workoutStyles: WorkoutStyle[];

  @Column()
  workoutFrequency: number;

  @OneToOne(() => User, (user) => user.info)
  user: User;
}
