import React from "react";
import { motion } from "framer-motion";
import { popFromLeftWithDelay } from "utils";
import { getGenreLinks } from "data/GenreLinks";
import { useParams } from "react-router";
import NoGenreFound from "./NoGenreFound";

import styles from "./GenrePage.module.scss";

const GenrePage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const links = getGenreLinks(id);
  if (links === undefined) return <NoGenreFound />;
  console.log(links);
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <motion.h1 {...popFromLeftWithDelay(0.4)}>
          Here are some links for <strong>Topic</strong>
        </motion.h1>
        <motion.h2 {...popFromLeftWithDelay(0.8)}>Hope this helps</motion.h2>
      </div>
    </section>
  );
};

export default GenrePage;
