import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Certifications = () => {
  return (
    <AnimatedSection id="certifications" className="container mx-auto">
      <h2 className="section-title">Certifications</h2>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-2xl card-hover flex items-start gap-4"
            variants={fadeInUp}
          >
            <FaCertificate className="text-3xl text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
              <p className="text-white/60 text-sm">{cert.issuer}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                {cert.year}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Certifications;
