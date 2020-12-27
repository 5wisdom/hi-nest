import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//partuakType은 무조건 값이 의무가 아니라 써도 되고 안써도 되는 ?이다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
