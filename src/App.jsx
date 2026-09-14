import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import StarfieldBackground from './components/StarfieldBackground';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-void bg-grid-glow">
        <Loader onDone={() => setLoading(false)} />
        <CustomCursor />
        <StarfieldBackground />
        <ScrollToTop />

        <div
          className="relative z-10 transition-opacity duration-700"
          style={{ opacity: loading ? 0 : 1 }}
        >
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
