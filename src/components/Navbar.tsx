import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCarrito } from '../context/CarritoContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cantidadTotal, abrirModal } = useCarrito();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-background py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/">
          <img src="/logo-morata.png" alt="Morata" className="h-16 w-auto" style={{ mixBlendMode: 'multiply' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-lg tracking-tight transition-colors hover:text-secondary ${
                location.pathname === link.path 
                  ? 'text-primary border-b-2 border-secondary pb-1' 
                  : 'text-primary/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/morata.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-primary/60 hover:text-secondary transition-colors"
            aria-label="Instagram de Morata"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={abrirModal}
            className="relative hover:opacity-80 transition-opacity"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-6 h-6 text-primary" />
            {cantidadTotal > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cantidadTotal > 9 ? '9+' : cantidadTotal}
              </span>
            )}
          </button>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-t border-surface-dark p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-xl ${
                    location.pathname === link.path ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/morata.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary/60 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-serif text-xl">Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
