import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />    
    </main>
  );
}

export default App;
