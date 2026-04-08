import { useState, useEffect } from 'react';
import './Hero.css';

const heroImages = [
  {
    id: 1,
    image: 'hero1.jpg',
    title: 'Welcome to Nyapui Secondary School of Excellence for Girls',
    subtitle: 'Inspiring Minds, Shaping Future'
  },
  {
    id: 2,
    image: 'hero2.jpg',
    title: 'Innovation & Discovery',
    subtitle: 'Building Tomorrow\'s Leaders'
  },
  {
    id: 3,
    image: 'hero3.jpg',
    title: 'Excellence in Education',
    subtitle: 'Shaping Future Scientists'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {heroImages.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="hero-slide-bg" 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/' + slide.image})` }}
            ></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href="#admissions" className="hero-btn hero-btn-primary">Apply Now</a>
                <a href="#about" className="hero-btn hero-btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
        
        <button className="hero-nav hero-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="hero-nav hero-next" onClick={nextSlide}>
          &#10095;
        </button>
        
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
