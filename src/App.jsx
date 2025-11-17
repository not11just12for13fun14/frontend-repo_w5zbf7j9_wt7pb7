import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandIntro from "./components/BrandIntro";
import ProductGrid from "./components/ProductGrid";
import WhyChoose from "./components/WhyChoose";
import Reviews from "./components/Reviews";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <ProductGrid />
        <WhyChoose />
        <Reviews />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
