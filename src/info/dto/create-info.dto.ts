import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';
import { WorkoutStyle } from '../entities/workoutStyle.entity';

export class CreateInfoDto {
  @ApiProperty({ example: 9 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  yoe: number;

  @ApiProperty({ type: WorkoutStyle, isArray: true })
  workoutStyles: WorkoutStyle[];

  @ApiProperty()
  workoutFrequency: number;
}
