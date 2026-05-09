import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MovingBanner.css';

const MovingBanner = () => {
  const items = [
    "Website Development", "Android App Development", "Networking ->TCP/Ip, Kafka, http ..",
      "Deployment Assist", "IT Consultancy"
  ];

  //  1) website development
// 2) Android app development
// 3) Networking -
// * TCP/Ip
// * Kafka
// * http

//  5) Deployement assist
  return (
    <div className="moving-banner">
      <motion.div 
        className="banner-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="banner-item">
            {item}
            <span className="dot"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingBanner;


