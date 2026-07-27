import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Education = () => {
  return (
    <AnimatedSection id="education" className="container mx-auto">
      <h2 className="section-title">Education</h2>
      
      <motion.div 
        className="max-w-4xl mx-auto space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-2xl card-hover"
            variants={fadeInUp}
          >
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm text-primary">
                {edu.period}
              </span>
            </div>
            <p className="text-primary font-medium mb-2">{edu.degree}</p>
            <p className="text-white/70">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Education;
