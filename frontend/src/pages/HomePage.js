import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { FaClock, FaLock, FaCheckCircle, FaDownload, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import "../assets/navbar.css";
import "../assets/HomePage.css";

// Section Component for Scroll Animations
const ScrollSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // Trigger when 20% is visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      {/* Homepage with Video and Navbar */}
      <div className="homepage-container">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="https://videos.pexels.com/video-files/7092235/7092235-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navbar */}
        <motion.nav 
          className="navbar"
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="navbar-container">
            <div className="logo">
              <Link to="/">Exam Platform</Link>
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
              {['Home', 'About', 'Exams', 'Contact', 'Login'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <div className="menu-icon" onClick={handleMenuToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </motion.nav>

        {/* Homepage Content */}
        <motion.div 
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Welcome to Our Exam Platform</h1>
          <p>Start your journey with online exams and certifications</p>
          <motion.button 
            className="explore-btn" 
            whileHover={{ scale: 1.1, backgroundColor: "#ff9800" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>


      {/* Advanced Features Section */}
      <ScrollSection>
        <div className="advanced-features-section">
          <h2>Our advanced feature set is fully customizable, making our online testing and certification software a perfect solution for even the most rigorous needs.</h2>
          <div className="features-cards">
            {[
              { icon: <FaCogs className="feature-icon" />, title: 'Fully Customizable', description: 'Your organization has unique testing and certification needs.' },
              { icon: <FaShieldAlt className="feature-icon" />, title: 'Advanced Security', description: 'Gauge has advanced security to keep your organization safe.' },
              { icon: <FaChartLine className="feature-icon" />, title: 'Scalable Solution', description: 'Gauge meets the needs of organizations of any size.' }
            ].map((feature, index) => (
              <motion.div 
                className="feature-card"
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>



      

      {/* Features Section with Scroll Animation */}
       <ScrollSection>
        <div className="features-section">
          <p><font size="6"><b>Advanced features for exams and certifications that matter</b></font><br />
            From multiple exam types, advanced question and answer configurations, proctoring, and certification
            and badging management, Gauge is a comprehensive online platform solution.
          </p>
          <div className="video-container">
            <video controls>
              <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </ScrollSection>
      
      

      {/* Smart Proctoring Section */}
      <ScrollSection>
        <div className="feature-block">
          <div className="image-text-row">
            <div className="feature-text">
              <h2>Smart Proctoring</h2>
              <p>Intelligent cheating prevention</p>
              <p>
                Invigilate and identify any suspicious activity in an online exam with AI-based cheating 
                prevention and take assertive action upon discovery of unacceptable behavior. 
                Optional live streaming of test takers with live chat. Optional automatic capture of 
                candidate’s photos during examination at specified intervals.
              </p>
            </div>
            <img
  src={`${process.env.PUBLIC_URL}/images/img1.png`}
  alt="Smart Proctoring"
  className="feature-image"
/>

          </div>
        </div>
      </ScrollSection>
      

      {/* Exam Monitor Section */}
<ScrollSection>
  <div className="image-text-row-left">
  <img
  src={`${process.env.PUBLIC_URL}/images/img2.png`}
  alt="Smart Proctoring"
  className="feature-image"
/>
    <div className="feature-text-right">
      <h2>Exam Monitor</h2>
      <p>Live coverage of your exams</p>
      <p>
        Optional live coverage of the examinations showing details such as the
        candidates taking, completed and dropped with their number of attempts,
        device name, browser, operating system, IP address, and location details.
      </p>
    </div>
  </div>
</ScrollSection>


{/* Large number of test takers*/}
<ScrollSection>
        <div className="feature-block">
          <div className="image-text-row">
            <div className="feature-text">
              <h2>Large number of test takers</h2>
              <p>Smooth concurrent exams</p>
              <p>
              An enormous number of candidates are catered smoothly when providing 
              concurrent exams, providing a delightful experience to both test takers and 
              managers. Our online exam system is built for a very large number of simultaneous test sessions. 
              </p>
            </div>
            <img
  src={`${process.env.PUBLIC_URL}/images/img3.png`}
  alt="Smart Proctoring"
  className="feature-image"
/>
          </div>
        </div>
      </ScrollSection>


       {/* Test maker software */}
<ScrollSection>
  <div className="image-text-row-left">
  <img
  src={`${process.env.PUBLIC_URL}/images/img4.png`}
  alt="Smart Proctoring"
  className="feature-image"
/>
    <div className="feature-text-right">
      <h2>Test maker software</h2>
      <p>Practice made perfect</p>
      <p>
      Test Maker Software efficiently assists self-study. Learners 
      can select tutor or test mode. The questions can be chosen as 
      per unused, incorrect or flagged. The best test prep tool for 
      critical examinations in fields such as medical, nursing, aviation and many more.
      </p>
    </div>
  </div>
</ScrollSection>
      


{/* Trusted Section with Scroll Animation */}
<ScrollSection>
        <div className="trusted-section">
          <h2>Trusted by users for over 25 years, 15 million Exams, </h2>
          <h2><center>and counting…</center></h2><br />
          <p>
            Gauge’s secure exam and certification platform is for organizations that demand advanced test
            configuration features, increased security, and a way to organize their certification and
            badging programs.
          </p>
        </div>
      </ScrollSection>
    

      

      

      {/* Footer Section */}
      <ScrollSection>
        <footer className="footer">
          <div className="footer-left">
            <h3>Company Name</h3>
            <p>
              Welcome to our exam platform, providing cutting-edge solutions for online certifications and exams.
            </p>
          </div>
          <div className="footer-middle">
            <h3>Contact Us</h3>
            <p>Address: 123 Exam Street, Knowledge City</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: support@examplatform.com</p>
          </div>
          <div className="footer-right">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {[FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub].map((Icon, idx) => (
                <motion.a href="#" key={idx} whileHover={{ scale: 1.2 }}>
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </ScrollSection>
    </div>
  );
};

export default Navbar;
