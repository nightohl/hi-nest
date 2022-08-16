import { MovieService } from './../movie/movie.service';
import { MovieController } from './../movie/movie.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
})
export class MoviesModule {}
