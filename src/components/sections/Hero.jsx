import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={fadeInUp}
        >
          <span className="text-primary">Chibah</span> Zahra
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-white/80 mb-2"
          variants={fadeInUp}
        >
          {personalInfo.title}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-primary/80 mb-6"
          variants={fadeInUp}
        >
          {personalInfo.subtitle}
        </motion.p>
        
        <motion.p 
          className="text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={fadeInUp}
        >
          Master's student in Intelligent Computer Systems Engineering with a strong passion for 
          Artificial Intelligence and Software Engineering. Interested in AI Engineering, System Design, 
          and Full-Stack Development, I enjoy building scalable and user-friendly applications while 
          continuously learning new technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-8"
          variants={fadeInUp}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 glass text-white rounded-full font-medium hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          {/* Le bouton Download CV a été supprimé */}
        </motion.div>
        
        <motion.div 
          className="flex gap-6 justify-center"
          variants={fadeInUp}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-primary transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-primary transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/60 hover:text-primary transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
