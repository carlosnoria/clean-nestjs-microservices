import { Module } from "@nestjs/common";
import { GenreService } from "./services/genre.service";
import { GenreController } from "./controllers/genre.controller";

@Module({
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
