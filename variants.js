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

export const staggerAccordionContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
      type: 'tween',
    },
  },
};

export const staggerFooterContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
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

export const heroTruckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: 'spring', duration: 3 },
  },
};

export const footerTruckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: 'spring', duration: 2 },
  },
};

export const fadeInDown = {
  initial: {
    y: -70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1.1 },
  },
};

export const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1.1 },
  },
};

export const fadeInLeft = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1.1 },
  },
};

export const fadeInRight = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1.1 },
  },
};
