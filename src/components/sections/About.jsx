import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id="about" className="container mx-auto">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="glass p-8 rounded-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            I am a Master's student in <span className="text-primary font-semibold">Intelligent Computer Systems Engineering</span> 
            at the University of Algiers 1. I am passionate about designing intelligent software 
            solutions that address real-world challenges and improve user experiences.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            My interests include <span className="text-secondary font-semibold">Artificial Intelligence</span>, 
            <span className="text-secondary font-semibold"> Software Engineering</span>, 
            <span className="text-secondary font-semibold"> System Design</span>, and 
            <span className="text-secondary font-semibold"> Full-Stack Development</span>. 
            I enjoy building applications that combine clean architecture, intuitive user 
            interfaces, and practical functionality.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            I believe in continuous learning and staying up to date with emerging technologies. 
            I am currently expanding my skills by building personal projects, exploring freelancing 
            opportunities, and continuously improving my software development expertise.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
