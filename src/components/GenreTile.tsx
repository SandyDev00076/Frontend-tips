import React, { useState } from "react";
import { motion } from "framer-motion";
import { Genre } from "types/Genre";
import { NO_OF_VARIANTS } from "App.constants";
import { Link } from "react-router-dom";
import { getVariants } from "utils";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
  index: number;
}

const GenreTile = ({ obj, index }: Props) => {
  const [focused, setFocused] = useState(false);

  const variants = getVariants(index, focused);

  const variantNumber = (index % NO_OF_VARIANTS) + 1;
  return (
    <Link
      to={`genre/${obj.id}`}
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
        {obj.title}
      </motion.div>
    </Link>
  );
};

export default GenreTile;
