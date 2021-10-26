import React, { useState } from "react";
import { NO_OF_VARIANTS } from "App.constants";
import { motion } from "framer-motion";
import { GenreLink } from "types/GenreLink";
import { getTileVariants, prepareURL, truncateURL } from "utils";

import styles from "./GenreLinkTile.module.scss";

interface Props {
  obj: GenreLink;
  index: number;
}
const GenreLinkTile = ({ obj, index }: Props) => {
  const [focused, setFocused] = useState(false);

  const variants = getTileVariants(index, focused);

  const variantNumber = (index % NO_OF_VARIANTS) + 1;
  return (
    <a
      href={prepareURL(obj.link)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        variants={variants}
        animate={["appear", "focus"]}
        whileHover={{
          y: -3,
        }}
        className={`${styles.container} variant${variantNumber}`}
      >
        <div className={styles.title}>{obj.title}</div>
        <div className={styles.url}>{truncateURL(obj.link)}</div>
        <div className={styles.desc}>{obj.description}</div>
      </motion.div>
    </a>
  );
};

export default GenreLinkTile;
