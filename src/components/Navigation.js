import './Navigation.css';

const menuItems = [
  { name: 'Who We Are', href: '#who-we-are' },
  { name: 'Programs', href: '#programs' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Work With Us', href: '#work' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact Us', href: '#contact' },
];

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a href={item.href} className="nav-link">{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
