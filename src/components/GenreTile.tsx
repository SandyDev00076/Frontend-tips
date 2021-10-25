import React from "react";
import { motion } from "framer-motion";
import { Genre } from "types/Genre";
import { NO_OF_VARIANTS } from "App.constants";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
  index: number;
}
const GenreTile = ({ obj, index }: Props) => {
  const variantNumber = (index % NO_OF_VARIANTS) + 1;
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3 * index + 1.2,
        },
      }}
      whileHover={{
        y: -3,
      }}
      className={`${styles.container} variant${variantNumber}`}
    >
      {obj.title}
    </motion.button>
  );
};

export default GenreTile;
