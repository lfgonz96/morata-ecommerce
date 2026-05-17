import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Send, CreditCard, Wallet, Landmark } from 'lucide-react';

const WA_NUMBER = '5491155912159';
const WA_DEFAULT_MSG = 'Hola! Consulta desde el sitio web de Morata 👜';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [consulta, setConsulta] = useState('Venta Minorista');
  const [mensaje, setMensaje] = useState('');

  function handleWhatsApp(e: { preventDefault: () => void }) {
    e.preventDefault();
    const text = `Hola! Soy ${nombre || 'un cliente'}. Consulta: ${consulta}. ${mensaje || WA_DEFAULT_MSG}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIW9-29qlk_44YxJyVysh6lZ77kVyoiGu7qAFlrsPTLEbz8YiUZBh59g3wXtFIfhpH7pS8CUH4n-apVqdGQ9wYoTKNHjkfM_XOIMEMVqzQIgxzOgp-sCc8RCFGeAQ2ms-NnEdOEiFym557IpRURkFPVjRk7ulTJUO_nXogOjX-KWCYmOm8brMBYUeo3AM1RIH6CP2Ox4nomCZ9p4u7TZoDFrFi6YobMu2yZdrTDgPvo9ItuB8160-bwMKCowgQYXDnucJE64Hatw" 
            alt="Artisan workshop"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6"
          >
            Estamos para ayudarte
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-lg md:text-xl font-light leading-relaxed"
          >
            Desde el corazón de Gualeguay, cada pieza cuenta una historia. Queremos ser parte de la tuya.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Canales de Atención</span>
              <h2 className="font-serif text-4xl text-primary mb-8">Nuestra Boutique</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">Taller en Gualeguay</h4>
                    <p className="text-primary/60 font-light mt-1">Entre Ríos, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">Horarios</h4>
                    <p className="text-primary/60 font-light mt-1">Lunes a Viernes de 09:00 a 18:00hs</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: '#25D366' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">WhatsApp</h4>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_DEFAULT_MSG)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/60 font-light mt-1 hover:text-secondary transition-colors underline decoration-primary/20 underline-offset-4 block"
                    >
                      +54 9 3444 XXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">Instagram</h4>
                    <a
                      href="https://www.instagram.com/morata.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/60 font-light mt-1 hover:text-secondary transition-colors underline decoration-primary/20 underline-offset-4 block"
                    >
                      @morata.ar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Wholesale Conditions */}
            <div className="bg-surface p-10 rounded-xl">
              <h3 className="font-serif text-2xl text-primary mb-6">Condiciones Mayoristas</h3>
              <div className="space-y-6">
                {[
                  { item: 'Bolsos y Carteras', min: 'Mín. 6 unidades' },
                  { item: 'Mates de Cuero', min: 'Mín. 4 unidades' },
                  { item: 'Accesorios de Escritorio', min: 'Mín. 10 unidades' }
                ].map((row) => (
                  <div key={row.item} className="flex justify-between items-center border-b border-primary/5 pb-4">
                    <span className="text-primary font-medium">{row.item}</span>
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {row.min}
                    </span>
                  </div>
                ))}
                <p className="text-primary/40 text-xs italic mt-4">
                  Envíos a todo el país. Los tiempos de producción varían según volumen.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface-dark p-12 rounded-xl shadow-sm relative overflow-hidden">
            <h2 className="font-serif text-3xl text-primary mb-8">Escríbenos</h2>
            <form className="space-y-6" onSubmit={handleWhatsApp}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">Tu Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors"
                  placeholder="Ej: Delfina Rossi"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">Tipo de Consulta</label>
                <select
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors appearance-none"
                >
                  <option>Venta Minorista</option>
                  <option>Venta Mayorista</option>
                  <option>Prensa / Colaboraciones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors resize-none"
                  placeholder="¿En qué podemos asesorarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-xl font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-primary-light transition-all group"
              >
                <span>Enviar vía WhatsApp</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-surface py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-serif text-3xl text-primary mb-12 italic">Medios de Pago y Seguridad</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
              <CreditCard className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-serif text-xl text-primary mb-2">Tarjetas de Crédito</h4>
              <p className="text-primary/60 text-sm leading-relaxed">Cuotas sin interés en productos seleccionados.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
              <Wallet className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-serif text-xl text-primary mb-2">Mercado Pago</h4>
              <p className="text-primary/60 text-sm leading-relaxed">Link de pago directo y códigos QR seguros.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
              <Landmark className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-serif text-xl text-primary mb-2">Transferencia</h4>
              <p className="text-primary/60 text-sm leading-relaxed">15% de descuento directo abonando por este medio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
