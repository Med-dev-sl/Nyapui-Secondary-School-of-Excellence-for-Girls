import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    icon: '📚',
    title: 'Academic Excellence',
    description: 'Our students consistently achieve outstanding results in national examinations, with a 98% pass rate and numerous subject top honors.'
  },
  {
    icon: '🏆',
    title: 'Sports & Clubs',
    description: 'Over 15 student clubs and competitive sports programs that nurture talent, teamwork, and leadership skills.'
  },
  {
    icon: '🏫',
    title: 'Modern Facilities',
    description: 'State-of-the-art science laboratories, computer labs, library, and sports infrastructure supporting holistic education.'
  },
  {
    icon: '👩‍🏫',
    title: 'Experienced Teachers',
    description: 'Dedicated educators with advanced qualifications committed to mentoring and guiding students toward success.'
  }
];

function Features() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current && headerRef.current) {
      headerRef.current.classList.add('visible');
      observer.observe(headerRef.current);

      const cards = sectionRef.current.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" ref={sectionRef}>
      <div className="features-container">
        <div className="features-header" ref={headerRef}>
          <h2 className="features-title">Why Choose Us</h2>
          <p className="features-subtitle">Discover what makes Nyapui Secondary School stand out</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
