import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/948201e84a895a8ed93da41a42a74a73560cbb49.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Programs', page: 'programs' },
    { label: 'Our Campus', page: 'campus' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Admissions', page: 'admissions' },
    { label: 'Contact Us', page: 'contact' },
    { label: 'Blog', page: 'blog' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none" style={{ paddingTop: isScrolled ? '0px' : '20px' }}>
      <motion.header
        className="bg-white shadow-lg pointer-events-auto"
        style={{
          borderRadius: isScrolled ? '0px' : (isMobile ? '20px' : '100px'),
          width: isScrolled ? '100%' : 'calc(100% - 40px)',
          maxWidth: isScrolled ? '100%' : '1400px',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6" style={{ maxWidth: isScrolled ? '1400px' : '100%', margin: '0 auto' }}>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="Little Harvard Preschool" className="h-12 md:h-16" />
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`transition-colors hover:text-[var(--lh-primary-green)] ${
                    currentPage === item.page
                      ? 'text-[var(--lh-primary-green)]'
                      : 'text-[var(--lh-neutral-gray-900)]'
                  }`}
                  style={{ fontSize: '20px' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => onNavigate('admissions')}
                className="bg-[var(--lh-accent-orange)] text-white px-6 py-2.5 rounded-[25px] hover:opacity-90 transition-opacity"
                style={{ fontSize: '20px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admissions Open
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--lh-neutral-gray-900)]"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                className="lg:hidden pb-4 flex flex-col gap-3 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left py-2 transition-colors hover:text-[var(--lh-primary-green)] ${
                      currentPage === item.page
                        ? 'text-[var(--lh-primary-green)]'
                        : 'text-[var(--lh-neutral-gray-900)]'
                    }`}
                    style={{ fontSize: '20px' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    onNavigate('admissions');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[var(--lh-accent-orange)] text-white px-6 py-2.5 rounded-[25px] hover:opacity-90 transition-opacity text-center mt-2"
                  style={{ fontSize: '20px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Admissions Open
                </motion.button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
}