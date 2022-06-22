import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateGenreDto extends PartialType(CreateGenreDto) {}
