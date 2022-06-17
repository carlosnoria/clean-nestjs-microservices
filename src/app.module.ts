import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [AutorModule, AuthorModule, BookModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
