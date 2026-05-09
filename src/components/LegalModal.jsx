import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import '../styles/LegalModal.css';

const LegalModal = ({ isOpen, onClose, type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      text: (
        <>
          <p>At IT SOLUTIONS AND SERVICES, we value your privacy. We only collect the information you voluntarily provide to us (such as your name and contact details) when you reach out for our services.</p>
          <p>We use this information solely to respond to your queries and provide the services you requested. We do not sell or share your data with third parties.</p>
          <p>If you have any questions, feel free to contact us at <strong>9980044293</strong> or <strong>ganadhishshetty@gmail.com</strong>.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      text: (
        <>
          <p>By using our services, you agree to work with IT SOLUTIONS AND SERVICES based on the project requirements we discuss together.</p>
          <p>We promise to deliver high-quality IT solutions including website development, app development, and networking. All project timelines and costs will be agreed upon before we start work.</p>
          <p>All work delivered to you is yours once the final payment is complete. We are here to help your business grow through technology!</p>
        </>
      )
    }
  };

  const activeContent = content[type] || content.privacy;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="legal-modal glass-effect"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="legal-modal-content">
              <h2>{activeContent.title}</h2>
              <div className="legal-text">
                {activeContent.text}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
