import { GenreLink } from "types/GenreLink";

const GenreLinks: { [k: string]: GenreLink[] } = {
  icons: [
    createGenreLink(
      "1",
      "Material",
      "A complete set of all Material Icons.",
      "https://material.io/resources/icons/"
    ),
    createGenreLink(
      "2",
      "FontAwesome",
      "The world's most popular and easiest to use icon set just got an upgrade. More icons. More styles. More Options.",
      "https://fontawesome.com/v6.0/icons"
    ),
    createGenreLink(
      "3",
      "FlatIcon",
      "The largest database of icons available in PNG, SVG, EPS, PSD and BASE 64 formats.",
      "https://www.flaticon.com/icons"
    ),
    createGenreLink(
      "4",
      "Simple Icons",
      "2070 Free SVG icons for popular brands.",
      "https://simpleicons.org/"
    ),
  ],
  images: [
    createGenreLink(
      "1",
      "User Stock",
      "Free photos of people's faces to use as avatars in UI mockups, prototypes and more.",
      "https://userstock.io/"
    ),
  ],
  colors: [],
  illustrations: [],
  css: [],
  prototyping: [],
  "design-systems": [],
  inspiration: [],
  react: [],
  angular: [],
};

/**
 *
 * @param id ID of the genre link
 * @param title Title for the genre link
 * @param description Description around the link
 * @param link URL that needs to be accessed
 * @returns A Genre link object
 */
export function createGenreLink(
  id: string,
  title: string,
  description: string,
  link: string
): GenreLink {
  return {
    id,
    title,
    description,
    link,
  };
}

/**
 *
 * @param genre ID of the genre
 * @returns Links associated with genre
 */
export function getGenreLinks(genre: string) {
  if (!Object.keys(GenreLinks).includes(genre)) return undefined;
  return GenreLinks[genre];
}
