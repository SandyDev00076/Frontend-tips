import { GenreLink } from "types/GenreLink";

const GenreLinks: { [k: string]: GenreLink[] } = {
  icons: [
    createGenreLink(
      "1",
      "Material Icons",
      "A complete set of all Material Icons",
      "https://material.io/resources/icons/"
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

export function getGenreLinks(genre: string) {
  if (!Object.keys(GenreLinks).includes(genre)) return undefined;
  return GenreLinks[genre];
}
