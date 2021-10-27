import React, { useState } from "react";
import { GenreLink } from "types/GenreLink";
import { prepareURL, truncateURL } from "utils";
import TileContainer from "./TileContainer";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./GenreLinkTile.module.scss";

interface Props {
  obj: GenreLink;
  index: number;
}
const GenreLinkTile = ({ obj, index }: Props) => {
  const [focused, setFocused] = useState(false);
  const [descVisibility, showDesc] = useState(false);

  return (
    <a
      href={prepareURL(obj.link)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <TileContainer
        tileIndex={index}
        className={styles.container}
        focused={focused}
        onHoverStart={() => showDesc(true)}
        onHoverEnd={() => showDesc(false)}
      >
        <div className={styles.title}>{obj.title}</div>
        <div className={styles.url}>{truncateURL(obj.link)}</div>
      </TileContainer>
      <AnimatePresence>
        {descVisibility && (
          <motion.div
            className={styles.desc}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
          >
            {obj.description}
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default GenreLinkTile;
