import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="container mx-auto">
      <h2 className="section-title">Projects</h2>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="glass rounded-2xl overflow-hidden card-hover"
            variants={fadeInUp}
          >
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/20">{project.title}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-primary text-sm mb-3">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-white/60 text-sm font-medium mb-2">Features:</p>
                <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-primary">+{project.features.length - 3} more</li>
                  )}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <FaGithub /> Code
                </a>
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {(!project.live || project.live === '#') && (
                  <span className="flex items-center gap-2 text-white/40 text-sm cursor-not-allowed">
                    <FaExternalLinkAlt /> Demo (Coming Soon)
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;
