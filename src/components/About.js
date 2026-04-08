import { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              imageRef.current.classList.add('slide-in');
            }
            if (entry.target === contentRef.current) {
              contentRef.current.classList.add('slide-in');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image" ref={imageRef}>
          <div className="about-image-wrapper">
            <div className="about-image-blob">
              <div className="about-image-inner">
                <img 
                  src={process.env.PUBLIC_URL + '/about.jpg'}
                  alt="About Nyapui Secondary School"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-image-decoration"></div>
            <div className="about-image-line"></div>
          </div>
        </div>
        <div className="about-content" ref={contentRef}>
          <h2 className="about-title">About Our School</h2>
          
          <div className="about-section">
            <h3 className="about-heading">Our Mission</h3>
            <p className="about-text">
              To provide quality STEM education that empowers young women to become 
              confident, innovative leaders and contribute meaningfully to society 
              through excellence in science, technology, engineering, and mathematics.
            </p>
          </div>

          <div className="about-section">
            <h3 className="about-heading">Our Values</h3>
            <ul className="about-list">
              <li>Excellence in Education</li>
              <li>Innovation & Critical Thinking</li>
              <li>Empowerment of Young Women</li>
              <li>Integrity & Character Development</li>
            </ul>
          </div>

          <div className="about-section">
            <h3 className="about-heading">Our Achievements</h3>
            <ul className="about-list">
              <li>High academic performance in national examinations</li>
              <li>Multiple awards in science competitions</li>
              <li>Successful STEM programs and projects</li>
              <li>Strong university placement record</li>
            </ul>
          </div>

          <a href="#who-we-are" className="about-btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default About;
