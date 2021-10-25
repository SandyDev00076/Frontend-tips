import React from "react";
import { motion } from "framer-motion";
import { popFromLeftWithDelay } from "utils";

import styles from "./GenrePage.module.scss";

const GenrePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <motion.h1 {...popFromLeftWithDelay(0.4)}>
          Here are some links for <strong>Topic</strong>
        </motion.h1>
        <motion.h2 {...popFromLeftWithDelay(0.8)}>Hope this helps</motion.h2>
      </div>
    </section>
  );
};

export default GenrePage;
