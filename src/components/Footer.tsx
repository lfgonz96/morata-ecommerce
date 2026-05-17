import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface py-20 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-3xl font-serif italic font-bold text-primary mb-6 block">
            MORATA
          </Link>
          <p className="text-primary/60 text-sm leading-relaxed max-w-xs">
            Excelencia artesanal desde Gualeguay, transmitiendo la esencia de nuestra tierra en cada costura.
          </p>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Empresa</h5>
          <ul className="space-y-4">
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Historia</Link></li>
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Mayoristas</Link></li>
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Sustentabilidad</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Ayuda</h5>
          <ul className="space-y-4">
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Preguntas Frecuentes</Link></li>
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Términos</Link></li>
            <li><Link to="#" className="text-primary/60 hover:text-secondary transition-colors text-sm">Envíos</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Suscribirse</h5>
          <p className="text-xs text-primary/60 mb-4">Recibí novedades sobre nuevos lanzamientos.</p>
          <div className="flex border-b border-primary/20 pb-2 group focus-within:border-secondary transition-colors">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-primary/30"
            />
            <button className="text-primary hover:text-secondary transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-4 mt-8">
            <a
              href="https://www.instagram.com/morata.ar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Morata"
              className="text-primary/40 hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="#" className="text-primary/40 hover:text-secondary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-primary/40 text-xs tracking-widest uppercase">
          © 2024 MORATA. Gualeguay, Entre Ríos.
        </p>
        <div className="flex space-x-6">
          <span className="text-primary/20 text-[10px] uppercase tracking-widest font-bold">Hecho a mano</span>
          <span className="text-primary/20 text-[10px] uppercase tracking-widest font-bold">Cuero Genuino</span>
        </div>
      </div>
    </footer>
  );
}
