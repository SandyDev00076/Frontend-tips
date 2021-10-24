import React from "react";
import { genreList } from "data/GenreList";
import GenreTile from "./GenreTile";
import { motion } from "framer-motion";

import styles from "./GenreList.module.scss";

function popFromLeftWithDelay(delay: number) {
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

const GenreList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <motion.h1 {...popFromLeftWithDelay(0.4)}>need some help?</motion.h1>
        <motion.h2 {...popFromLeftWithDelay(0.8)}>
          Pick a <strong>Genre</strong>
        </motion.h2>
      </div>
      <div className={styles.genres}>
        {genreList.map((genre, index) => (
          <GenreTile obj={genre} key={genre.id} index={index} />
        ))}
      </div>
    </section>
  );
};

export default GenreList;
