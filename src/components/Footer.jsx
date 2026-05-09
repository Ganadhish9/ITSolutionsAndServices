import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = ({ onContactClick, onLegalClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Rocket className="logo-icon" />
              <span>IT SOLUTIONS <small>& SERVICES</small></span>
            </div>
            <p className="footer-desc">
              Share your requirements with us and get
              expert guidance to bring your ideas to life.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li>
                <Link to="/#services" onClick={(e) => { e.preventDefault(); handleScroll('services'); }}>Services</Link>
              </li>
              <li><Link to="/success-stories" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Success Stories</Link></li>
              <li>
                <Link to="/#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/#website-development" onClick={(e) => { e.preventDefault(); handleScroll('website-development'); }}>Full Stack Development</Link></li>
              <li><Link to="/#android-app-development" onClick={(e) => { e.preventDefault(); handleScroll('android-app-development'); }}>Android Development</Link></li>
              <li><Link to="/#networking" onClick={(e) => { e.preventDefault(); handleScroll('networking'); }}>Networking</Link></li>
              <li><Link to="/#deployment-assist" onClick={(e) => { e.preventDefault(); handleScroll('deployment-assist'); }}>Deployment Assist</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li><Mail size={18} />
                <a href="mailto:ganadhishshetty@gmail.com">
                  ganadhishshetty@gmail.com
                </a></li>
              <li><Phone size={18} />
                <a href="tel:+919980044293">
                  9980044293
                </a></li>
              {/* <li><MapPin size={18} /> Tech Park, Phase 1, Bangalore, India</li> */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IT SOLUTIONS AND SERVICES. All rights reserved.</p>
          <div className="footer-legal">
            <button onClick={() => onLegalClick('privacy')}>Privacy Policy</button>
            <button onClick={() => onLegalClick('terms')}>Terms of Service</button>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919980044293?text=Hello%20IT%20Solutions%20and%20Services!%20I%20have%20a%20query%20regarding%20your%20services."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={30} fill="white" color="#25D366" />
        <span className="tooltipText">Need Help? Chat with us!</span>
      </a>
    </footer>
  );
};

export default Footer;
