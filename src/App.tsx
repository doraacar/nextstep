import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessTimeline from './components/ProcessTimeline';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <ProcessTimeline />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
