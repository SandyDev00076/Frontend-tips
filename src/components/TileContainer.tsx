import React from "react";
import { NO_OF_VARIANTS } from "App.constants";
import { motion } from "framer-motion";
import { getTileVariants } from "utils";

interface Props {
  tileIndex: number;
  children: React.ReactNode;
  className: string;
  focused: boolean;
}
const TileContainer = ({ tileIndex, children, className, focused }: Props) => {
  const variants = getTileVariants(tileIndex, focused);
  const variantNumber = (tileIndex % NO_OF_VARIANTS) + 1;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      variants={variants}
      animate={["appear", "focus"]}
      whileHover={{
        y: -3,
      }}
      className={`${className} variant${variantNumber}`}
    >
      {children}
    </motion.div>
  );
};

export default TileContainer;
