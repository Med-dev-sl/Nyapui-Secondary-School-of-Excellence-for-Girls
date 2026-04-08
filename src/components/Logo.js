import logo from '../logo.png';

function Logo({ className, alt = 'Logo', width, height }) {
  return (
    <img 
      src={logo} 
      className={className} 
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Logo;
