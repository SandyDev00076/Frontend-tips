export function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function popFromLeftWithDelay(delay: number) {
  return {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      delay,
    },
  };
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
