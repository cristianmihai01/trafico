export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.6,
    },
  },
};

export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const boyAnim = {
  initial: { x: -150, opacity: 0 },
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
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1 },
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1 },
  },
};
