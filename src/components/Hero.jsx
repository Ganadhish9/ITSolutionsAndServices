import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Globe } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Reliable IT Services</span>
          <h1 className="hero-title">
            Power Your Business in the <span className="gradient-text">Digital Era</span> with IT Solutions
          </h1>
          <p className="hero-description">
            We provide end-to-end  IT solutions including Website Development, Android App Development,
             Networking, and Deployment Services to help your business grow and scale efficiently.

          </p>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">
              Explore Services <ArrowRight size={18} />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-visual glass-effect">
            <div className="floating-card card-1">
              <Code color="#0ea5e9" />
              <div>
                <h4>Development</h4>
                <p>Websites</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <Shield color="#f43f5e" />
              <div>
                <h4>Deployment</h4>
              </div>
            </div>
            <div className="floating-card card-3">
              <Globe color="#6366f1" />
              <div>
                <h4>Networking</h4>
               <p>TCP/IP,Kafka,http</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="IT Solutions"
              className="hero-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
