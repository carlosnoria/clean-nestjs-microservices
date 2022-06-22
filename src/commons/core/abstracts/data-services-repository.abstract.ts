import { Author } from "../../../author/core/entities/author.entity";
import { Book } from "../../../book/core/entities/book.entity";
import { Genre } from "../../../genre/core/entities/genre.entity";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;

  abstract books: IGenericRepository<Book>;

  abstract genres: IGenericRepository<Genre>;
}
