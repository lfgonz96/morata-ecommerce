import { motion } from 'motion/react';
import { MapPin, Clock, Mail, Send, CreditCard, Wallet, Landmark } from 'lucide-react';

export default function Contacto() {
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
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">Consultas Digitales</h4>
                    <p className="text-primary/60 font-light mt-1 underline decoration-primary/20 underline-offset-4">hola@morata.com.ar</p>
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">Tu Nombre</label>
                <input 
                  type="text" 
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors" 
                  placeholder="Ej: Delfina Rossi" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors" 
                  placeholder="+54 9 11 ..." 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary tracking-widest uppercase ml-1">Tipo de Consulta</label>
                <select className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors appearance-none">
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
                  className="w-full bg-white border-0 border-b border-primary/10 focus:ring-0 focus:border-secondary p-4 transition-colors resize-none" 
                  placeholder="¿En qué podemos asesorarte?"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-xl font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-primary-light transition-all group">
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
