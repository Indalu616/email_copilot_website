import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HowItWorks from '../pages/HowItWorks';
import Pricing from '../pages/Pricing';
import Docs from '../pages/Docs';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default AppRoutes;