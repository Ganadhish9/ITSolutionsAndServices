import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MovingBanner from './components/MovingBanner';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import LegalModal from './components/LegalModal';
import SuccessStories from './pages/SuccessStories';
import { courses } from './data/courses';
import './styles/variables.css';
import './App.css';

const Home = ({ openModal }) => {
  return (
    <>
      <Hero />
      <MovingBanner />
      <div className="section-spacer"></div>

      <section id="services" className="courses-section container">
        <div className="section-header">
          <span className="badge">Our Services</span>
          <h2 className="section-title">Solutions We Deliver</h2>
          <p className="section-desc">
            From custom software development to networking and deployment, we provide reliable,
            scalable, and secure IT solutions tailored to your business needs.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} id={course.title.trim().toLowerCase().replace(/\s+/g, '-')} className="course-card-wrapper" style={{ height: '100%' }}>
              <CourseCard course={course} onBuy={openModal} />
            </div>
          ))}
        </div>
      </section>



      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-card glass-effect">
            <h2>Have a project in mind?</h2>
            <p>Contact us today and let’s turn your ideas into powerful digital solutions.</p>
            <div className="cta-btns">
              <button className="btn btn-primary" onClick={openModal}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openLegalModal = (type) => setLegalModal({ isOpen: true, type });
  const closeLegalModal = () => setLegalModal({ ...legalModal, isOpen: false });

  return (
    <div className="app">
      <Header onContactClick={openModal} />

      <main>
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </main>

      <Footer onContactClick={openModal} onLegalClick={openLegalModal} />

      <JoinModal isOpen={isModalOpen} onClose={closeModal} />
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={closeLegalModal} 
        type={legalModal.type} 
      />
    </div>
  );
}

export default App;
