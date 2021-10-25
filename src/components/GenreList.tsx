import React from "react";
import { genreList } from "data/GenreList";
import GenreTile from "./GenreTile";
import { motion } from "framer-motion";
import { popFromLeftWithDelay } from "utils";

import styles from "./GenreList.module.scss";

const GenreList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <motion.h1 {...popFromLeftWithDelay(0.4)}>
          need some help in <strong>Frontend</strong> ?
        </motion.h1>
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
