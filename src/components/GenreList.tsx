import React from "react";
import { genreList } from "data/GenreList";
import GenreTile from "./GenreTile";

import styles from "./GenreList.module.scss";

const GenreList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h1>need some help?</h1>
        <h2>
          Pick a <strong>Genre</strong>
        </h2>
      </div>
      <div className={styles.genres}>
        {genreList.map((genre) => (
          <GenreTile obj={genre} key={genre.id} />
        ))}
      </div>
    </section>
  );
};

export default GenreList;
