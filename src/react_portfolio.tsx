import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Palette, Database, Globe, Cpu, Brain, BarChart2 } from 'lucide-react';
import searchDoctor from './assets/search_doctor.jpeg';
import bci from './assets/bci.jpeg';
import dashboard from './assets/dashboard.jpeg';
import keyboard from './assets/keyboard.jpeg';

[{
	"resource": "/c:/Users/HP/Downloads/portfolio/my_portfolio/src/react_portfolio.tsx",
	"owner": "typescript",
	"code": "1232",
	"severity": 8,
	"message": "An import declaration can only be used at the top level of a namespace or module.",
	"source": "ts",
	"startLineNumber": 58,
	"startColumn": 1,
	"endLineNumber": 58,
	"endColumn": 7
},{
	"resource": "/c:/Users/HP/Downloads/portfolio/my_portfolio/src/react_portfolio.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '../assets/search-doctor.jpeg' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 58,
	"startColumn": 26,
	"endLineNumber": 58,
	"endColumn": 56
}]
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId:string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = () => {
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const skills = [
    { name: 'Backend Development', icon: <Database className="w-8 h-8" />, description: 'Java, Python,API Development' },
    { name: 'Web Technologies', icon: <Globe className="w-8 h-8" />, description: 'HTML, CSS, React.js' },
    { name: 'Databases', icon: <Database className="w-8 h-8" />, description: 'MySQL, PostgreSQL, NoSQL' },
    {name: 'AI & Data Science',icon: <Brain className="w-8 h-8" />,description: 'Machine Learning, Deep Learning, NLP, AI Models'},
    {name: 'Data Science',icon: <BarChart2 className="w-8 h-8" />,description: 'Data Cleaning, EDA, Visualization, Statistics'
}
    
  ];

const experience = [
  {
    role: "AI Developer Intern",
    company: "Craftech 360",
    duration: "March 2025 – april 2025",
    description: "Created and customized nodes using ComfyUI, streamlining AI workflow automation.Built AI-powered image generation pipelines and explored language training integration for dynamic outputs. Utilized Supabase as a backend service and learned scalable cloud deployment with RunPod.Employed Docker to containerize applications for seamless deployment.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "AI Tools", "Pipeline Workflow", "Docker", "Runpod"]
  }
];

  

  const projects = [
    {
      title: 'SEARCH DOCTOR',
      description: 'A full-stack solution to find doctors in a city along with the directions with React.js, Java, and PostgreSQL.',
      image: searchDoctor,
      technologies: ['React.js', 'Java', 'PostgreSQL'],
      github: 'https://github.com/dikshahegde/Search_doctor'
    },
    {
      title: 'AI FRAMEWORK FOR VEP-BASED BCI',
      description: 'A machine learning model to analyze EEG signals for object recognition with 82% accuracy using AI,Machine Learning,Data Science and Deep Learning.',
      image: bci,
      technologies: ['Machine learning', 'Data Science', 'Data Visualisation', 'Artificial Intelligence', 'Deep learning'],
      github: 'https://github.com/dikshahegde/EEG_Analysis'
    },
    {
      title: 'Retail KPI Dashboard',
      description: 'A responsive representation of retail analysis with location of many countries.',
      image: dashboard,
      technologies: ['Data Analysis', 'PowerBI', 'Tableau', 'Data Processing'],
      github: 'https://github.com/dikshahegde/retail-kpi-dashboard'
    },
    {
      title: 'COMPUTER VISION-BASED VIRTUAL KEYBOARD',
      description: 'A real-time virtual keyboard using OpenCV and MediaPipe for hand tracking in varying lighting conditions.',
      image: keyboard,
      technologies: ['Computer Vision', 'MediaPipe'],
      github: 'https://github.com/dikshahegde/virtual_keyboard'
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Diksha Hegde</div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
          </ul>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Diksha Hegde</h1>
          <p className="hero-subtitle"><strong>Full Stack Developer & AI Developer </strong></p>
          <p className="hero-description"><strong>
            I build intelligent, scalable, and efficient systems that drive impactful digital experiences through AI and backend development.
            </strong>
          </p>
          <button className="cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* About Section */}
      <section id="about" className={`about-section ${visibleSections.has('about') ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="avatar">What I Work With</div>
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm a passionate Full-Stack and AI Developer focused on creating web applications and AI models that solve real-world problems. I specialize in modern Data Science frameworks and have a keen eye for design.I recently completed an internship as an AI Developer, where I gained hands-on experience in building intelligent systems and deploying machine learning models in practical environments.
              </p>
              <p>
                Looking for oppurtunity to apply my skills to solve problems.
              </p>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects-section ${visibleSections.has('projects') ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={`experience-section ${visibleSections.has('experience') ? 'visible' : ''}`}>
  <div className="container">
    <h2 className="section-title">Experience</h2>
    <div className="experience-grid">
      {experience.map((item, index) => (
        <div key={index} className="experience-card">
          <h2 className="experience-role">{item.role}</h2>
          <strong><p className="experience-company">{item.company}</p></strong>
          <p className="experience-duration">{item.duration}</p>
          <p className="experience-description">{item.description}</p>
          <div className="experience-tech">
            {item.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className={`contact-section ${visibleSections.has('contact') ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
              </p>
              
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>hegdediksha24@email.com</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 8277433034</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="button" className="submit-btn" onClick={handleSubmit}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; Diksha Hegde</p>
          <div className="social-links">
            <a href="https://github.com/dikshahegde" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/diksha-hegde-90724b264/" aria-label="LinkedIn"><Linkedin /></a>
            <a href="hegdediksha24@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </footer>

      <style>{`
        .portfolio {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {

        
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #667eea;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: -1;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .hero-content {
          z-index: 2;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-weight: 700;
          opacity: 0;
          animation: fadeInUp 1s ease 0.2s forwards;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0;
          animation: fadeInUp 1s ease 0.4s forwards;
          background: rgba(255, 255, 255, 0.9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease 0.6s forwards;
        }

        .cta-button {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem 2rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInUp 1s ease 0.8s forwards;
          backdrop-filter: blur(10px);
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Section Styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #333;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: #f8f9fa;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .about-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .about-image {
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .avatar {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          text-align: center;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .skill-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .skill-icon {
          color: #667eea;
          margin-bottom: 1rem;
        }

        .skill-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .skill-card p {
          color: #666;
          font-size: 0.9rem;
        }

        /* Projects Section */
        .projects-section {
          padding: 6rem 0;
          background: white;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .projects-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: #f8f9fa;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .project-image .image-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .project-description {
          font-size:1.3rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-technologies {
          font-size:1.6rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: #667eea;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #764ba2;
        }

        /* Contact Section */
        .contact-section {
          padding: 6rem 0;
          background: #f8f9fa;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .contact-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .contact-info p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          margin-right: 1rem;
          color: #667eea;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Footer */
        .footer {
          background: #333;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }

        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #667eea;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 2rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .footer .container {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .nav-container {
            padding: 0 1rem;
          }
          .experience-section {
  padding: 6rem 0;
  background: #f4f6fc;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.experience-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.experience-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.experience-role {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.experience-company {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.experience-duration {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.experience-description {
  color: #555;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

        }
      `}</style>
    </div>
  );
};

export default Portfolio;