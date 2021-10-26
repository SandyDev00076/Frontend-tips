export { popFromLeftWithDelay, getTileVariants } from "./anims";

export function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getIDFromGenre(genre: string) {
  return genre.toLocaleLowerCase().replace(/\s/g, "-");
}

export function createGenreDataEntry(genre: string) {
  return {
    id: getIDFromGenre(genre),
    title: genre,
  };
}

export function createGenreDataEntryArray(...genres: string[]) {
  return genres.map((genre) => createGenreDataEntry(genre));
}

export function prepareURL(url: string) {
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  return `http://${url}`;
}

export function truncateURL(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
}
