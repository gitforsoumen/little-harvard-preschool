import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/70d848c479cb749f01ef7cb5c799267ba4d8b8e9.png';
import { CloudPattern } from './CloudPattern';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1a2332] text-white relative">
      <CloudPattern color="#1a2332" flip={true} />
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div>
            <motion.img 
              src={logo} 
              alt="Little Harvard Preschool" 
              className="h-16 mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-white/80 mb-4">
              A School With the Heart of a Mother. Education + Interests = A Happy, Confident Child.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--lh-accent-teal)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--lh-accent-pink)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--lh-accent-orange)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-1 relative inline-block text-[24px]">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[var(--lh-accent-orange)]"></span>
            </h3>
            <div className="flex flex-col gap-2 mt-6">
              {['Home', 'About Us', 'Programs', 'Our Campus', 'Gallery', 'Admissions', 'Contact Us', 'Blog'].map(
                (item) => (
                  <motion.button
                    key={item}
                    onClick={() => onNavigate(item.toLowerCase().replace(/\s+/g, ''))}
                    className="text-white/70 hover:text-[var(--lh-accent-teal)] transition-colors text-left"
                    style={{ fontSize: '20px' }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
          </div>

          {/* Contact Info - Bhubaneswar */}
          <div>
            <h3 className="text-white mb-1 relative inline-block text-[24px]">
              Bhubaneswar Campus
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[var(--lh-accent-orange)]"></span>
            </h3>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-white/60" />
                <p className="text-white/70">
                  Plot No. 123, Patia,<br />Bhubaneswar, Odisha
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/60" />
                <a href="tel:7008679964" className="text-white/70 hover:text-[var(--lh-accent-teal)] transition-colors">
                  7008679964
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60" />
                <a href="mailto:bbsr@littleharvard.edu" className="text-white/70 hover:text-[var(--lh-accent-teal)] transition-colors">
                  bbsr@littleharvard.edu
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info - Sambalpur */}
          <div>
            <h3 className="text-white mb-1 relative inline-block text-[24px]">
              Sambalpur Campus
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[var(--lh-accent-orange)]"></span>
            </h3>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-white/60" />
                <p className="text-white/70">
                  Main Road,<br />Sambalpur, Odisha
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/60" />
                <a href="tel:7008679964" className="text-white/70 hover:text-[var(--lh-accent-teal)] transition-colors">
                  7008679964
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60" />
                <a href="mailto:sbp@littleharvard.edu" className="text-white/70 hover:text-[var(--lh-accent-teal)] transition-colors">
                  sbp@littleharvard.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-center md:text-left">
              ©2025 Little Harvard School. All Rights Reserved.
            </p>
            <p className="text-white/50 flex items-center gap-2">
              Developed By: <a href="https://www.inadev.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--lh-accent-teal)] transition-colors text-[rgb(255,255,255)]">Inadev India Private Limited</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}