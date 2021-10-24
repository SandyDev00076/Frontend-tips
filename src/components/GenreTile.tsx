import React from "react";
import { motion } from "framer-motion";
import { Genre } from "types/Genre";
import { getRandomArbitrary } from "utils";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
  index: number;
}
const GenreTile = ({ obj, index }: Props) => {
  const variantNumber = (index % 3) + 1;
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.4 * index + 1.2,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={`${styles.container} ${styles[`variant${variantNumber}`]}`}
    >
      {obj.title}
    </motion.button>
  );
};

export default GenreTile;
