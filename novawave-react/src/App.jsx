import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import About from './pages/About';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';
import WhatsAppButton from './components/WhatsAppButton';
import CircuitBackground from './components/CircuitBackground';
import useScrollReveal from './hooks/useScrollReveal';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <ScrollHandler />
      {/* Global Digital Circuit Board Background Effect */}
      <CircuitBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/company.html" element={<Company />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/team.html" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio.html" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog/:slug.html" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}
