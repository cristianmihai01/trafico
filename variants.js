/* export const fadeIn = (direction) => {
  return {
    initial: {
      y: direction === 'up' ? 80 : -120,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
}; */

export const imageAnimate = {
  initial: { x: -100 },
  animate: {
    x: 0,
    rotate: [0, -90, 120, 60, 0],
    transition: { type: 'spring', bounce: 0.2, duration: 2 },
  },
};
