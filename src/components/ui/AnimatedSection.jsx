import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const AnimatedSection = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 md:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
