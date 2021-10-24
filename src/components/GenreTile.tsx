import React from "react";
import { motion } from "framer-motion";
import { Genre } from "types/Genre";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
  index: number;
}
const GenreTile = ({ obj, index }: Props) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.4 * index + 0.8,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={styles.container}
    >
      {obj.title}
    </motion.button>
  );
};

export default GenreTile;
