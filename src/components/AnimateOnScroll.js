import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

function AnimateOnScroll({
  children,
  variant,
  delay,
  duration,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight', 'scaleIn']),
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

AnimateOnScroll.defaultProps = {
  variant: 'fadeUp',
  delay: 0,
  duration: 0.6,
  className: undefined,
  style: undefined,
};

export default AnimateOnScroll;
