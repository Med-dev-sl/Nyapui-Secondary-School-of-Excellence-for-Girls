import { useState, useEffect, useRef } from 'react';
import './News.css';

const newsItems = [
  {
    id: 1,
    category: 'Announcement',
    date: 'April 5, 2026',
    title: 'School Opens for Second Term',
    description: 'We are pleased to announce that the second term commences on April 15, 2026. All students are expected to report on time.'
  },
  {
    id: 2,
    category: 'Event',
    date: 'April 20, 2026',
    title: 'Annual Science Fair 2026',
    description: 'Join us for our annual science fair showcasing innovative STEM projects from our talented students.'
  },
  {
    id: 3,
    category: 'News',
    date: 'April 1, 2026',
    title: 'National Science Competition Winners',
    description: 'Congratulations to our students who won top honors in the National Science Competition.'
  },
  {
    id: 4,
    category: 'Announcement',
    date: 'March 28, 2026',
    title: 'STEM Workshop for Parents',
    description: 'A workshop for parents on supporting STEM education at home will be held on April 10.'
  }
];

function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (newsItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (newsItems.length - 2)) % (newsItems.length - 2));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (newsItems.length - 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="news" ref={sectionRef}>
      <div className={`news-container ${visible ? 'visible' : ''}`}>
        <div className="news-header">
          <div>
            <h2 className="news-title">News & Events</h2>
            <p className="news-subtitle">Stay updated with the latest from our school</p>
          </div>
          <a href="#news" className="news-view-all">View All News</a>
        </div>

        <div className="news-slider">
          <button className="news-nav news-prev" onClick={prevSlide}>&#10094;</button>
          
          <div className="news-track">
            {newsItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <div 
                className={`news-card ${visible ? 'jump-in' : ''}`} 
                key={item.id}
                style={{ animationDelay: visible ? `${index * 0.15}s` : '0s' }}
              >
                <span className={`news-category ${item.category.toLowerCase()}`}>{item.category}</span>
                <p className="news-date">{item.date}</p>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-description">{item.description}</p>
                <a href="#news" className="news-read-more">Read More</a>
              </div>
            ))}
          </div>
          
          <button className="news-nav news-next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </section>
  );
}

export default News;
