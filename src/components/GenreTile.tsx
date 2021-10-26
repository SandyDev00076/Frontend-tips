import React, { useState } from "react";
import { Genre } from "types/Genre";
import { Link } from "react-router-dom";
import TileContainer from "./TileContainer";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
  index: number;
}

const GenreTile = ({ obj, index }: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <Link
      to={`genre/${obj.id}`}
      className={styles.link}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <TileContainer
        tileIndex={index}
        className={styles.container}
        focused={focused}
      >
        {obj.title}
      </TileContainer>
    </Link>
  );
};

export default GenreTile;
