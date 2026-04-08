import { useState } from 'react';
import Logo from './Logo';
import './Header.css';

const whoWeAreItems = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Mission & Vision', href: '#mission' },
  { name: 'Our Values', href: '#values' },
  { name: 'Our Team', href: '#team' },
];

const aboutItems = [
  { name: 'School History', href: '#history' },
  { name: 'Leadership / Staffs', href: '#leadership' },
  { name: 'Achievement', href: '#achievement' },
];

const academicsItems = [
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Subjects', href: '#subjects' },
  { name: 'Academic Calendar', href: '#calendar' },
  { name: 'Timetable', href: '#timetable' },
  { name: 'Examination Info', href: '#examination' },
];

const admissionsItems = [
  { name: 'Admission Requirements', href: '#requirements' },
  { name: 'How to Apply', href: '#how-to-apply' },
  { name: 'Online Application', href: '#online-application' },
  { name: 'Fee Structure', href: '#fee-structure' },
  { name: 'Scholarships', href: '#scholarships' },
];

const studentLifeItems = [
  { name: 'Clubs & Activities', href: '#clubs' },
  { name: 'Sports', href: '#sports' },
  { name: 'Events', href: '#events' },
  { name: 'Student Leadership', href: '#leadership' },
];

const newsEventsItems = [
  { name: 'Latest News', href: '#latest-news' },
  { name: 'Announcements', href: '#announcements' },
  { name: 'Upcoming Events', href: '#upcoming-events' },
  { name: 'Blog', href: '#blog' },
];

const galleryItems = [
  { name: 'Photos', href: '#photos' },
  { name: 'Videos', href: '#videos' },
];

const elearningItems = [
  { name: 'Study Materials', href: '#study-materials' },
  { name: 'Assignments', href: '#assignments' },
  { name: 'Downloads', href: '#downloads' },
];

const portalItems = [
  { name: 'Student Login', href: '#student-login' },
  { name: 'Teacher Login', href: '#teacher-login' },
  { name: 'Parent Login', href: '#parent-login' },
];

const menuItems = [
  { name: 'Who We Are', href: '#who-we-are', dropdown: whoWeAreItems },
  { name: 'About Us', href: '#about-us', dropdown: aboutItems },
  { name: 'Gallery', href: '#gallery', dropdown: galleryItems },
  { name: 'Admissions', href: '#admissions', dropdown: admissionsItems },
  { name: 'Academics', href: '#academics', dropdown: academicsItems },
  { name: 'Student Life', href: '#student-life', dropdown: studentLifeItems },
  { name: 'E-Learning / Resources', href: '#elearning', dropdown: elearningItems },
  { name: 'News & Events', href: '#news-events', dropdown: newsEventsItems },
  { name: 'Portal', href: '#portal', dropdown: portalItems },
  { name: 'Contact Us', href: '#contact' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <Logo className="header-logo" alt="School Logo" />
        <div className="header-titles">
          <h1 className="header-title-main">Nyapui Secondary School</h1>
          <p className="header-title-sub">of Excellence for Girls</p>
        </div>
      </div>
      
      <button 
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeAll}></div>
      )}

      <nav className={`navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.name} className="nav-item">
              {item.dropdown ? (
                <div className="dropdown">
                  <button 
                    type="button"
                    className="nav-link dropdown-trigger"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <span className={`dropdown-arrow ${openDropdown === item.name ? 'open' : ''}`}>▼</span>
                  </button>
                  {openDropdown === item.name && (
                    <ul className="dropdown-menu">
                      {item.dropdown.map((dropItem) => (
                        <li key={dropItem.name}>
                          <a href={dropItem.href} className="dropdown-link" onClick={closeAll}>
                            {dropItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a href={item.href} className="nav-link" onClick={closeAll}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
