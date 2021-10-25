export function popFromLeftWithDelay(delay: number) {
  return {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      delay,
    },
  };
}

export function getVariants(index: number, focused: boolean) {
  return {
    appear: {
      opacity: 1,
      transition: {
        delay: 0.15 * index + 1.2,
      },
    },
    focus: {
      filter: focused ? "brightness(0.9)" : "brightness(1)",
    },
  };
}
