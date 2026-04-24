import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'framer-motion';

function formatCount(count) {
  if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
}

function AnimatedCounter({ target, suffix, duration }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {formatCount(count)}
      {suffix}
    </span>
  );
}

AnimatedCounter.propTypes = {
  target: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number,
};

AnimatedCounter.defaultProps = {
  suffix: '',
  duration: 2000,
};

export default AnimatedCounter;
