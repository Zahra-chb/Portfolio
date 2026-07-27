import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const now = new Date();
    const time = now.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const templateParams = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value,
      title: `Portfolio Contact - ${formRef.current.name.value}`,
      time: time,
    };

    emailjs.send('service_j01syuo', '3kfdb6d', templateParams, 'Zxns8mRYWSK3Kph0M')
      .then((result) => {
        setIsSubmitted(true);
        setIsLoading(false);
        formRef.current.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        setError('Failed to send message. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <AnimatedSection id="contact" className="container mx-auto">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-white/60">
                I'm always open to new opportunities, collaborations, or just a friendly chat!
              </p>
            </motion.div>
            
            <motion.div className="space-y-4" variants={fadeInUp}>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-all">
                <FaEnvelope className="text-2xl text-primary" />
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white">{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-all">
                <FaGithub className="text-2xl text-primary" />
                <div>
                  <p className="text-white/60 text-sm">GitHub</p>
                  <p className="text-white">@Zahra-chb</p>
                </div>
              </a>
              
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/10 transition-all">
                <FaLinkedin className="text-2xl text-primary" />
                <div>
                  <p className="text-white/60 text-sm">LinkedIn</p>
                  <p className="text-white">Zahra Chibah</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.form ref={formRef} onSubmit={handleSubmit} className="glass p-6 rounded-2xl space-y-4" variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
              
              <div>
                <label className="block text-white/60 text-sm mb-1">Name</label>
                <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-white/60 text-sm mb-1">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-white/60 text-sm mb-1">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..." />
              </div>
              
              <motion.button type="submit" disabled={isLoading} className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {isSubmitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              
              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center text-sm">
                  ❌ {error}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
 
