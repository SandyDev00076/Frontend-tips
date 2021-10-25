import { GenreLink } from "types/GenreLink";

const GenreLinks: { [k: string]: GenreLink[] } = {
  icons: [
    {
      id: "1",
      title: "Material Icons",
      description: "A complete set of all Material Icons",
      link: "https://material.io/resources/icons/",
    },
  ],
  images: [
    {
      id: "1",
      title: "User Stock",
      description:
        "Free photos of people's faces to use as avatars in UI mockups, prototypes and more.",
      link: "https://userstock.io/",
    },
  ],
};

export function getGenreLinks(genre: string) {
  if (!Object.keys(GenreLinks).includes(genre)) return undefined;
  return GenreLinks[genre];
}
