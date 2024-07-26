
import './App.css';
import Header from './Header';
import About from './AboutSection';
import Features from './ProductFeatures';
import InfoSection from './InfoSection';
import Brands from './BrandsSection';
import Footer from './Footer';

function App() {
  return (
    <div class="overflow-hidden">
      <Header/>
      <About/>
      <Features/>
      <InfoSection/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;
