import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Services from '@/components/Services';
import { NavMobileProvider } from '@/components/contexts/NavMobileContext';

export default function Home() {
  return (
    <NavMobileProvider>

    <div style={{ backgroundColor: ' rgb(224, 214, 200)' }}>
      <Header />
      <Banner/>
      <Description/>
      <Services/>
      <About/>
      <Contact/>
      <Footer />
    </div>
    </NavMobileProvider> 
  );
}
