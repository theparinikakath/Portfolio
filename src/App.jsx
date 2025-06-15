import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '1px' }}>
        <Hero/>
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
      </main>
        <Footer/>
    </>
  );
}

export default App;
