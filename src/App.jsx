import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Program from './Pages/Program';
import ProjectsPage from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* OFFSET HEADER FIXED */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
