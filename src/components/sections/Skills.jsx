import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Skills = () => {
  const skillCategories = [
    { title: '💻 Languages', items: skills.languages },
    { title: '🎨 Frontend', items: skills.frontend },
    { title: '⚙️ Backend', items: skills.backend },
    { title: '🤖 AI / Chatbot', items: skills.ai },
    { title: '🚀 DevOps', items: skills.devops },
  ];

  return (
    <AnimatedSection id="skills" className="container mx-auto">
      <h2 className="section-title">Skills</h2>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-2xl card-hover"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-8 glass p-6 rounded-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-primary mb-4">📚 Concepts & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {skills.concepts.map((concept, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/20 rounded-full text-sm text-white/80 border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              {concept}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-white/80 border border-green-500/20">Helmet</span>
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-white/80 border border-green-500/20">XSS-Clean</span>
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-white/80 border border-green-500/20">Rate Limiting</span>
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-white/80 border border-green-500/20">Bcrypt</span>
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-white/80 border border-green-500/20">Cron Jobs</span>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;
