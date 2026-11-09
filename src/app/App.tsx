import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { CampusPage } from './components/pages/CampusPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { AdmissionsPage } from './components/pages/AdmissionsPage';
import { ContactPage } from './components/pages/ContactPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import '../styles/globals.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogId, setBlogId] = useState<number | undefined>(undefined);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page);
    if (page === 'blog-detail' && id) {
      setBlogId(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} key="home" />;
      case 'about':
      case 'aboutus':
        return <AboutPage key="about" />;
      case 'programs':
        return <ProgramsPage key="programs" />;
      case 'campus':
      case 'ourcampus':
        return <CampusPage key="campus" />;
      case 'gallery':
        return <GalleryPage key="gallery" />;
      case 'admissions':
        return <AdmissionsPage onNavigate={handleNavigate} key="admissions" />;
      case 'contact':
      case 'contactus':
        return <ContactPage key="contact" />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} key="blog" />;
      case 'blog-detail':
        return <BlogDetailPage onNavigate={handleNavigate} blogId={blogId} key="blog-detail" />;
      default:
        return <HomePage onNavigate={handleNavigate} key="home" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}