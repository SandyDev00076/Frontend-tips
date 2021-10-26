import { Genre } from "types/Genre";
import { createGenreDataEntryArray } from "utils";

export const genreList: Genre[] = createGenreDataEntryArray(
  "Icons",
  "Images",
  "Colors",
  "Illustrations",
  "CSS",
  "Prototyping",
  "Design Systems",
  "Inspiration",
  "React",
  "Angular"
);

export function getGenreByID(id: string) {
  return genreList.find((item) => item.id === id);
}
