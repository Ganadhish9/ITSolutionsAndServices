import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle, Clock } from 'lucide-react';
import '../styles/CourseCard.css';

const CourseCard = ({ course, onBuy }) => {
  return (
    <motion.div 
      className="course-card glass-effect"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <span className="course-badge">{course.category}</span>
      </div>
      
      <div className="course-info">
        <div className="course-header">
        </div>
        
        <h3 className="course-title">{course.title}</h3>
        <h3 className="course-subtitle">{course.subtitle}</h3>
        <p className="course-desc">{course.description}</p>
        
        <ul className="course-features">
          {course.features.map((feature, idx) => (
            <li key={idx}><CheckCircle size={14} /> {feature}</li>
          ))}
        </ul>
        
        <button className="btn btn-primary w-full buy-btn" onClick={onBuy}>
          Contact Us
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
