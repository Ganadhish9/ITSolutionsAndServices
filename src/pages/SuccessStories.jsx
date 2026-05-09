import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Code2, Globe } from 'lucide-react';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
{
      title: "Narasimha Big Bazaar",
      url: "https://narasimhabigbazaar.in",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
      summary: "A comprehensive e-commerce platform for Narasimha Big Bazaar, enabling customers to browse and purchase a wide range of grocery and household products online with ease.",
      techStack: [
        "Golang",
        "PostgreSQL", "JWT",
        "Swagger",
        "REST APIs",
        "React", "CRUD Operations",
        "Tailwind CSS",
        "Encryption",
        "React Router DOM", "Responsive Web Design",
        "Lucide React",
        "Token Refresh Authentication",
        "Vite"
      ],
      features: ["Product Catalog", "Secure Checkout", "Inventory Management"]
    },


    {
      title: "Ibanni Bike Rental Gokarna",
      url: "https://ibbanibikerentalgokarna.in",
      image: "/ibanni.png",
      summary: "A premium bike rental platform designed for tourists in Gokarna. The system features a real-time booking engine and automated inventory management for a hassle-free rental experience.",
      techStack: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Node.js",
        "REST APIs",
        "Google Maps Embed API",
        "Responsive Web Design",
      ],
      features: ["Integrated Booking System", "Google Maps Integration"]
    },
    {
      title: "Mantri Stay Gokarna",
      url: "https://mantristaygokarna.com",
      image: "/mantri.png",
      summary: "An elegant, high-end resort booking website for Mantri Stay. Focused on visual storytelling and seamless user journeys, this platform provides guests with detailed room previews, amenity highlights, and a robust reservation system.",
      techStack: ["React 18", "Vanilla CSS", "Google Maps Embedded API", "Lucide React", "REST APIs"],
      features: ["Integrated Booking System", "Google Maps Integration"]

    }

    
  ];

  return (
    <div className="success-stories-page">
      <section className="stories-hero">
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-title"
          >
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-desc"
          >
            Discover how we've helped businesses transform their digital presence and achieve excellence.
          </motion.p>
        </div>
      </section>

      <section className="projects-list container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="project-card"
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
                  Visit Site <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h2>{project.title}</h2>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="site-link">
                  <Globe size={16} /> {project.url.replace('https://', '')}
                </a>
              </div>

              <p className="project-summary">{project.summary}</p>

              <div className="tech-stack">
                <h3><Code2 size={18} /> Technology Stack</h3>
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="key-features">
                <h3><CheckCircle2 size={18} /> Key Features</h3>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default SuccessStories;
