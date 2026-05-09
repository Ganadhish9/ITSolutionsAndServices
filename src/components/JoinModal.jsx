import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare } from 'lucide-react';
import '../styles/JoinModal.css';

const JoinModal = ({ isOpen, onClose }) => {
  const phoneNumber = "9980044293";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="modal-content glass-effect contact-popup"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <h2>Contact Us</h2>
              <p>We are available to help you with your project needs.</p>
            </div>

            <div className="contact-options">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div className="contact-info">
                  <span>Call Us</span>
                  <a href={`tel:${phoneNumber}`} className="contact-number">{phoneNumber}</a>
                </div>
                <a href={`tel:${phoneNumber}`} className="btn btn-primary call-btn">
                  Call Now
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper whatsapp">
                  <MessageSquare className="contact-icon" />
                </div>
                <div className="contact-info">
                  <span>WhatsApp</span>
                  <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="contact-number">{phoneNumber}</a>
                </div>
                <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  Message
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;

