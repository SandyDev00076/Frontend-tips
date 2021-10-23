import React from "react";
import { Genre } from "types/Genre";

import styles from "./GenreTile.module.scss";

interface Props {
  obj: Genre;
}
const GenreTile = ({ obj }: Props) => {
  return <button className={styles.container}>{obj.title}</button>;
};

export default GenreTile;
