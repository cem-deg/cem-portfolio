import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Certificates from '../components/home/Certificates';
import About from '../components/home/About';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Certificates />
      <Footer />
    </main>
  );
}
