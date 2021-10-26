export { popFromLeftWithDelay, getTileVariants } from "./anims";

/**
 *
 * @param min Minimum number
 * @param max Maximum number
 * @returns A random number between min and max values. Both inclusive.
 */
export function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *
 * @param genre Title of the genre
 * @returns ID associated with the title
 */
export function getIDFromGenre(genre: string) {
  return genre.toLocaleLowerCase().replace(/\s/g, "-");
}

/**
 *
 * @param url URL to be accessed
 * @returns URL appended with http:// if needed for opening the link in a new tab
 */
export function prepareURL(url: string) {
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  return `http://${url}`;
}

/**
 *
 * @param url URL to be accessed
 * @returns Modified URL which can be shown on UI
 */
export function truncateURL(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
}
