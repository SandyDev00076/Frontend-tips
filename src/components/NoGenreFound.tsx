import { NoLinkIcon } from "assets/icons";
import React from "react";

import styles from "./NoGenreFound.module.scss";

const NoGenreFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.iconContainer}>
          <NoLinkIcon />
        </div>
        <h1>Sorry, No genre found</h1>
        <h2>Check the name and try again</h2>
      </div>
    </section>
  );
};

export default NoGenreFound;
