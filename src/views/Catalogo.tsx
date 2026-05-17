import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { User, Store, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Catalogo() {
  const cartucheras = [
    {
      title: 'Cartuchera Originaria',
      price: '$14.500',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsFEaWdfLjO-GiVFmu4u6gjouOTAPrPCWcTD7EobnZBp0sH81FM3jV2dsi-6xq4i2JTzKv6d4XS3dZyF8P099VfxV5eY42fGZlwtEtRAbD4pdx2iU59xk2veNhJj5N39THRVV4pVJmV3YfouSJJNz3zPKmgwSGXPLRF9bQg3gd--XGRx9fG04DFXbpUrtbxMCUgCUkxPqCfMI89472BhMEopJ0LzRxzhnhOplVpB2K4e4wV4ANazDPsGSWJdGYiLsFYmzJymILIQ',
      handmade: true
    },
    {
      title: 'Porta Lápices Cincelado',
      price: '$12.800',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ZyexkLlUNjsCcH2QzKpvA0Ne0nU8-CPT7buGxkWjjrMIXRo0U2h3arjzLErmMQvLYmPwEUIPGSOlFOzjtRWxjSKzGu5CkDOXmTUa2H7ouXOwZ_jwUPB8stL6M7Yia42RUpOCjd5CyPOiSrHZFQJYQmzBNW46kdeQOXc7gNS8jmDUTnv--HQT8MyfMpWRcOuClkIgWCLeMw33eHQ5LIXkl4tFHwKTwcob4bD8l7KlK2V0HmMzW2fLSFnPBdFF8BZiML87PVe6lw'
    },
    {
      title: 'Sobre de Cuero Crudo',
      price: '$16.200',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOi3liYaMlh3_9R0JzXgyg3t04y9wQV78C5oF0BGbEyhRxITNw3M3hFmaURFQGFFFjn2FRq8p9pCZSM7oxXVxMcDDSiAOonTGc2pzJSCyjvwGH8YfpVqHp74FrUbyRjSLbAV-YPOTI8JNFqCEwsZt_2EZ8pFX7WDQCik0_V1H5pb3qfuOfdANNKBk4RzLI4jarkM2jwCmcBFwNzItUi2C2BrgCbd1C4Q0eHVsE9B-UiY1HXygng0TXwkDvkiCd_QYUmQmr9BNXdA'
    }
  ];

  const mates = [
    {
      title: 'Mate Imperial Cincelado',
      price: '$42.000',
      category: 'Imperial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVWNUmFW6m0Eb0z7dypVkS-YqwzukDorkPXwJokUQVzJhIwdeZYjt_fZKzpnXbs95Aaza0yccehdJDICrC4tzYtBHxd8Kj9jI3JZrhE0FgIgrZQQeBZkymlZ23yKKbHKDUFsC1DxkW7x9VdSH7AU8On4sKOh7ZW3GEPuymnqnBrMYT1zC3HtoUxSk0VJqiGqi0X07tNo0SrqTEGdPgd46Bovn5AGJrWp08WOTcC4w5SsTTZrwdiMq-ma5MExQHMnc2z1WzQ9YSIQ'
    },
    {
      title: 'Bombilla Pico de Loro',
      price: '$18.500',
      category: 'Alpaca',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhbzaCP4KGBCvLYwL9cydr3o9v7tRaR0ewy8pI0zVfFz8uKFghEhM6QxoLlz5Pt-UJ0hrWzlJKLVdVS4xeLE0ogqu_Mi1RdnOaCA5W86R_QZ-wkndv9JBZkufvKc-xV0NtaKjc9d67LEoDG11hDwfohPVGo4RiTdjhk9gWavqKtWZYEdy75i8s2FGZKpI03NYmExAxBg3r93is7YgYke09YwxmNTNYQ1SJ0HhnV5QNJNC3JZA7JI8kxC75bXcC8x0gvao4p_uWeQ'
    },
    {
      title: 'Yerbero de Campo',
      price: '$12.900',
      category: 'Cuero',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdAQoDObZOmiBCdehwP_fMCrTYd8RMdZcqkmPl8N5otoagQ1Z1PFejTQAm2uJFPN6ts6lIyuh7bZDzjcAfvtKgvD0k1fNEpogXCjncaHdjLIi0UKXA_4iYia6RarnWqoB-hpTmd5Me-eiLHKb64pzG1xGox6YM8woa7u7CX5qEwoNohsluc9mHg8woa7u7CX5qEwoNohsluc9mHg8moekqbS0NvqE7HPTJGbf6dCrzON6PLtgX5AA9rTsY0ir9PznRRc4x5shciWkQ82LdIHOlxcXBTVIH07Lltzw'
    },
    {
      title: 'Mate Torneado Caldén',
      price: '$9.500',
      category: 'Madera',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHdfK1P1IMv7g_vX7Q-SDQ8GV6rv9j4X9vPmhdZLthjNcqwSitC7RmjPl00OS81GEW-sw1HYQcZQvcD_uAoW-At5URWXWkApFBw_A9xv6gdAwIN22UhfKutTpuEKICgbdMzDgxs7T2Kn_c6HY8J4x5uM3wZJ96tVYo-TXnEWymhp0neqUm_vSNiCzOGfuhDvndIpg2MyHUKYTMR24OubT5a3bCP22vTfkupH9dOUDopFfQx4yhoszyhVMzEoTtjqaER31NW6LBRQ'
    }
  ];

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

      {/* Cartucheras */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex items-baseline gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic">Cartucheras</h2>
          <div className="h-px flex-grow bg-primary/10"></div>
          <span className="text-sm font-sans text-secondary uppercase tracking-widest">01 / 05</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cartucheras.map((p, i) => (
            <ProductCard 
              key={p.title} 
              title={p.title}
              price={p.price}
              image={p.image}
              handmade={p.handmade}
              delay={i * 0.1} 
            />
          ))}
        </div>
      </section>

      {/* Bolsitos Materos */}
      <section className="bg-surface py-32 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-primary italic">Bolsitos Materos</h2>
            <div className="h-px flex-grow bg-primary/10"></div>
            <span className="text-sm font-sans text-secondary uppercase tracking-widest">02 / 05</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="aspect-square rounded-md overflow-hidden bg-white shadow-xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYxUoPkFGhQGkRsKzB9vxmKGWmdc5dwsDZ3_Q-RQaF1NkMsC0-eOUiNiHIi1DrANRvcqqsyQ5yrgsuJqUxKXxd9f1u_1yHpVtgD0ZzohVoSE4wEBG1Z0hPpWkIh0HZo4rRCJQ_aeiSAWVzzw8W3SlCWiL-VipiepNuRHK15FMc_Py_XY1cyABcB8d11n-rz0si48gH3TnRAhGpDPuBcq_ZSMP75JBaWvIe4ltSc0Y2cbUk3YQEpqor0e-4DkfRq9jaGEwuSIEnbQ" 
                  alt="Bolso Gualeguay"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute -bottom-8 -right-8 bg-white p-8 max-w-xs shadow-lg hidden md:block"
              >
                <h4 className="text-2xl font-serif text-primary mb-2 italic">Bolso Gualeguay</h4>
                <p className="text-primary/60 text-sm mb-4">Estructura reforzada para termos de hasta 1.5L. Interior forrado en tela impermeable.</p>
                <span className="text-secondary font-bold">$38.900</span>
              </motion.div>
            </div>
            <div className="flex flex-col justify-center space-y-12">
              <div className="flex gap-6 items-center group">
                <div className="w-32 h-32 flex-shrink-0 bg-surface-dark rounded-md overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUsnm7H9uGWNp3tEmN4qmCFYfDoJg5H-li8tu0fz4nGsCdR1sFPdmLdhObHRM64lLU2m1iS0jowqsvzhLHfM6VoLn760ymoTwIs4il23zEhvhuvXSC7REH1_2p5fEMtaczIGFG-k3x02lygPSSP-jvu1ShdBn0RxtdgzQH9pgcNv5dcPXjMZWzI2Gz3u7pailzoJpFrtoa08CvRM_rc-NVKFeUZE4KQZzQthMgAW_Yn7c-KbXZ009I02zY5pfyCD-_lcqrwJItNA" alt="Maletín Minimal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-primary">Maletín Minimal</h4>
                  <p className="text-secondary font-bold mb-2">$32.500</p>
                  <button className="text-primary text-xs uppercase font-bold tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">Ver Detalles</button>
                </div>
              </div>
              <div className="flex gap-6 items-center group">
                <div className="w-32 h-32 flex-shrink-0 bg-surface-dark rounded-md overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUn8GFe2SnEso52JJNEZ8wFzBRisOZxGwLJILweTMKYAeJtycE3DHvSiN1xczJWn17f28te7pO7D7ccvuhGaciQPYD_N31DHV-C44RS9qkA1NcIQiq5cJVkMsoQOkkDavhlwOjmoAhCYgbQY09mwGQ40dl3yIXbZ14MeZEiAa2uLoFDZZAU87YMSQSTWzW1S9LB8xPRLL0Ta3D0JHIXNAQHrZKymSy4CczabInXVjSeQI4AgfO3kCw65ts4pMMMPKI3K3OtUkeLw" alt="Bandolera Mate" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-primary">Bandolera Mate</h4>
                  <p className="text-secondary font-bold mb-2">$29.000</p>
                  <button className="text-primary text-xs uppercase font-bold tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">Ver Detalles</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mates */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex items-baseline gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic">Mates & Accesorios</h2>
          <div className="h-px flex-grow bg-primary/10"></div>
          <span className="text-sm font-sans text-secondary uppercase tracking-widest">03 / 05</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {mates.map((p, i) => (
            <ProductCard 
              key={p.title} 
              title={p.title}
              price={p.price}
              image={p.image}
              category={p.category}
              delay={i * 0.1} 
            />
          ))}
        </div>
      </section>

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
              className="bg-secondary-container hover:bg-secondary text-primary hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl flex items-center gap-3 group"
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
