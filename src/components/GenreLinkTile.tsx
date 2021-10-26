import React, { useState } from "react";
import { GenreLink } from "types/GenreLink";
import { prepareURL, truncateURL } from "utils";
import TileContainer from "./TileContainer";

import styles from "./GenreLinkTile.module.scss";

interface Props {
  obj: GenreLink;
  index: number;
}
const GenreLinkTile = ({ obj, index }: Props) => {
  const [focused, setFocused] = useState(false);

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
      >
        <div className={styles.title}>{obj.title}</div>
        <div className={styles.url}>{truncateURL(obj.link)}</div>
        <div className={styles.desc}>{obj.description}</div>
      </TileContainer>
    </a>
  );
};

export default GenreLinkTile;
