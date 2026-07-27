import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="container mx-auto">
      <h2 className="section-title">Experience</h2>
      
      <motion.div 
        className="max-w-4xl mx-auto space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-2xl card-hover"
            variants={fadeInUp}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <p className="text-primary">{exp.position}</p>
              </div>
              <span className="px-3 py-1 bg-primary/20 rounded-full text-sm text-primary">
                {exp.period}
              </span>
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Experience;
