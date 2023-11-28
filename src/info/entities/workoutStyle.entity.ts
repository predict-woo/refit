import { EntityHelper } from 'src/utils/entity-helper';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Info } from './info.entity';

@Entity()
export class WorkoutStyle extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Info, (info) => info.workoutStyles)
  info: Info;
}
