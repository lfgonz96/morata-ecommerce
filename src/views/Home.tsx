import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Map } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIW9-29qlk_44YxJyVysh6lZ77kVyoiGu7qAFlrsPTLEbz8YiUZBh59g3wXtFIfhpH7pS8CUH4n-apVqdGQ9wYoTKNHjkfM_XOIMEMVqzQIgxzOgp-sCc8RCFGeAQ2ms-NnEdOEiFym557IpRURkFPVjRk7ulTJUO_nXogOjX-KWCYmOm8brMBYUeo3AM1RIH6CP2Ox4nomCZ9p4u7TZoDFrFi6YobMu2yZdrTDgPvo9ItuB8160-bwMKCowgQYXDnucJE64Hatw"
            alt="Artisan hands"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Gualeguay, Entre Ríos
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-white font-bold tracking-tighter mb-8 italic">
            MORATA
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Artesanía en cuero que trasciende el tiempo. Cada pieza es un tributo a nuestra tradición.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/catalogo"
              className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl flex items-center gap-3 group"
            >
              Explorar Catálogo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contactar Taller
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <Star className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="font-serif text-2xl text-primary mb-4">Calidad Premium</h3>
            <p className="text-primary/60 leading-relaxed">Seleccionamos los mejores cueros de la región para garantizar durabilidad y elegancia.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="font-serif text-2xl text-primary mb-4">Proceso Artesanal</h3>
            <p className="text-primary/60 leading-relaxed">Cada costura es realizada a mano por maestros artesanos de Gualeguay.</p>
          </div>
          <div className="text-center">
            <Map className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="font-serif text-2xl text-primary mb-4">Envíos a Todo el País</h3>
            <p className="text-primary/60 leading-relaxed">Llevamos la esencia de Entre Ríos a cada rincón de la Argentina.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
