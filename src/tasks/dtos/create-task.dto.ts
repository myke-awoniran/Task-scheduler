import { IsDate, isString, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString() title: string;

  @IsString() description: string;

  @IsDate() created_at: string;
}
