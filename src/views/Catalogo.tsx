import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { User, Store, CheckCircle2, MessageSquare } from 'lucide-react';
import { productos } from '../data/productos';

const CATEGORIAS = ['bolsitos', 'cartucheras', 'mates'] as const;

const LABEL: Record<string, string> = {
  bolsitos: 'Bolsitos Materos',
  cartucheras: 'Cartucheras',
  mates: 'Mates & Accesorios',
};

export default function Catalogo() {
  return (
    <div className="pt-24">
      {/* Header */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvQoKSb8MHCTaPp4LsmmiufZ7WX11E3hZNLOZnctflx9KEFvJuE0tV-T7JYep5dJUgyusyHIFPNnsN0onwi7aSLuuNRy30N6r22uRFvMTxkM_poKHhfs-JsqnTkadi76RzqiuCyDRmxx1vELpNHMJgAqp5Pyg8z8E8jGa5LqZ1GQhtXOTnOWVCcGSKXpuBvB_Ve_wirzjeWMrqm03hOlnfrjVvpPQBC3NcLtaOBbII8wDWiBJA6Z7J8gNLE7ET8EGL0WjkVSl5DQ"
            alt="Leather texture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter text-primary mb-4 italic">
            Catálogo MORATA
          </h1>
          <p className="text-secondary font-sans text-lg tracking-widest uppercase font-semibold">
            Artesanía de Entre Ríos
          </p>
          <div className="mt-12 w-px h-24 bg-primary/20 mx-auto"></div>
        </div>
      </header>

      {/* Info Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-surface p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <User className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-3xl font-serif text-primary mb-4">Compra Minorista</h3>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Selección curada para el uso cotidiano. Sin mínimos de compra, con envíos a todo el país y atención personalizada.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Envío Inmediato
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Cuotas sin Interés
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <Store className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-3xl font-serif mb-4">Venta Mayorista</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Ideal para regionales, boutiques y regalos corporativos. Acceda a precios diferenciales y personalización de marca.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Descuentos por Volumen
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Grabado de Logo Propio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Productos por categoría */}
      {CATEGORIAS.map((cat, idx) => {
        const items = productos.filter(p => p.categoria === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
            <div className="flex items-baseline gap-6 mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-primary italic">{LABEL[cat]}</h2>
              <div className="h-px flex-grow bg-primary/10"></div>
              <span className="text-sm font-sans text-secondary uppercase tracking-widest">
                {String(idx + 1).padStart(2, '0')} / {String(CATEGORIAS.length).padStart(2, '0')}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {items.map((p, i) => (
                <ProductCard key={p.id} producto={p} delay={i * 0.1} />
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-primary text-white flex flex-col md:flex-row items-center justify-between p-12 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none"></div>
          <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
            <h2 className="text-4xl font-serif mb-4 italic text-accent">¿Buscás un presupuesto personalizado?</h2>
            <p className="text-white/70 leading-relaxed">Contactanos para compras por mayor, regalos corporativos o diseños a medida para tu marca. Atendemos consultas de todo el país.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-secondary text-primary hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl flex items-center gap-3 group"
            >
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Consultar por WhatsApp
            </a>
            <span className="mt-4 text-[10px] uppercase tracking-widest text-white/40">Respuesta en menos de 2 horas</span>
          </div>
        </div>
      </section>
    </div>
  );
}
