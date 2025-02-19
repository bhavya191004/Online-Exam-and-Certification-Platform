import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaLock, FaCheckCircle, FaDownload, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa'; // Added icons for new features
import "../assets/navbar.css";
import "../assets/HomePage.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      {/* Homepage with Video and Navbar */}
      <div className="homepage-container">
        {/* Video Background */}
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="https://videos.pexels.com/video-files/7092235/7092235-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <Link to="/">Exam Platform</Link>
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/exams">Exams</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="menu-icon" onClick={handleMenuToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        {/* Content over the video */}
        <div className="content">
          <h1>Welcome to Our Exam Platform</h1>
          <p>Start your journey with online exams and certifications</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>

        {/* Trusted Section */}
      <div className="trusted-section">
        <h2>Trusted by users for over 25 years, 15 million Exams, </h2>
        <h2><center>and counting…</center></h2><br />
        <p>
          Gauge’s secure exam and certification platform is for organizations that demand advanced test
          configuration features, increased security, and a way to organize their certification and
          badging programs. Our online platform is used by government agencies, trade organizations,
          and training providers to medium-sized businesses and large enterprises. Our customers are
          organizations that need more control over online exams and certification management.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <p><font size="6"><b>Advanced features for exams and certifications that matter</b></font><br />
          From multiple exam types, advanced question and answer configurations, proctoring, and certification
          and badging management, Gauge is a comprehensive online platform solution for organizations that
          need more control over the tests, users, and licensure programs they administer.
        </p>
        <div className="video-container">
          <video controls>
            <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      
      {/* Flowchart Section */}
      {/* <div className="flowchart-section">
        <h2>Exam Flow Overview</h2>
        <div className="flowchart">
          <div className="flow-item">
            <FaClock className="flow-icon" />
            <p>Timed Exams</p>
          </div>
          <div className="arrow">→</div>
          <div className="flow-item">
            <FaLock className="flow-icon" />
            <p>Secure Exam Environment</p>
          </div>
          <div className="arrow">→</div>
          <div className="flow-item">
            <FaCheckCircle className="flow-icon" />
            <p>Auto-Grading</p>
          </div>
          <div className="arrow">→</div>
          <div className="flow-item">
            <FaDownload className="flow-icon" />
            <p>Certificate Generation & Download</p>
          </div>
        </div>
      </div> */}

     {/* Advanced Features Section */}
     <div className="advanced-features-section">
        <h2>Our advanced feature set is fully customizable, making our online testing and certification software a perfect solution for even the most rigorous needs.</h2>
        <div className="features-cards">
          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Fully Customizable</h3>
            <p>Your organization has unique testing and certification needs. Gauge gives you full control to build a solution that is right for you.</p>
          </div>
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Advanced Security</h3>
            <p>As an enterprise-ready exam and certification platform, Gauge has advanced security to keep your organization safe.</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Scalable Solution</h3>
            <p>Gauge was built to meet the needs of large multi-national corporations and small organizations of any size.</p>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Navbar;
