import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="container mx-auto">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass p-8 rounded-2xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-white/80 text-lg mb-8"
            variants={fadeInUp}
          >
            I'm always open to new opportunities, collaborations, or just a friendly chat!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            variants={fadeInUp}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 glass px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FaEnvelope className="text-2xl text-primary" />
              <span className="text-white">{personalInfo.email}</span>
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FaGithub className="text-2xl text-primary" />
              <span className="text-white">GitHub</span>
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <FaLinkedin className="text-2xl text-primary" />
              <span className="text-white">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
