import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <CTA />
      <News />
    </div>
  );
}

export default App;
