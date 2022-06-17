import { Author } from '../../author/entities/author.entity';
import { Genre } from '../../genre/entities/genre.entity';

export class Book {
  title: string;

  author: Author;

  genre: Genre;

  publishDate: Date;
}
