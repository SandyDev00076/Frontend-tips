import { Genre } from "types/Genre";
import { getIDFromGenre } from "utils";

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

/**
 *
 * @param id ID of the genre
 * @returns Genre object associated with the ID
 */
export function getGenreByID(id: string) {
  return genreList.find((item) => item.id === id);
}

/**
 *
 * @param genre Title of the genre
 * @returns A genre object containing id and title
 */
export function createGenreDataEntry(genre: string) {
  return {
    id: getIDFromGenre(genre),
    title: genre,
  };
}

/**
 *
 * @param genres List of genres
 * @returns An array of genre objects
 */
export function createGenreDataEntryArray(...genres: string[]) {
  return genres.map((genre) => createGenreDataEntry(genre));
}
