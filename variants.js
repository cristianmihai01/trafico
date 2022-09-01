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
*/

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.8,
    },
  },
};

export const boyAnim = {
  initial: { x: -300, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 4 },
  },
};

export const girlAnim = {
  initial: { x: 900, opacity: 0 },
  animate: {
    x: 700,
    opacity: 1,
    transition: { type: 'spring', duration: 3 },
  },
};

export const truckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: 'spring', duration: 3 },
  },
};

export const fadeInDown = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 3 },
  },
};
