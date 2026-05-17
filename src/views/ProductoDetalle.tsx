import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ShoppingCart, Check, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';

const WA_NUMBER = '5491155912159';

export default function ProductoDetalle() {
  const { id } = useParams<{ id: string }>();
  const producto = productos.find(p => p.id === id);

  const [imgIdx, setImgIdx] = useState(0);
  const [agregado, setAgregado] = useState(false);
  const { agregarProducto } = useCarrito();

  if (!producto) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-primary/50 font-serif text-2xl mb-6">Producto no encontrado</p>
        <Link to="/catalogo" className="text-secondary underline font-semibold">
          Ver catálogo
        </Link>
      </div>
    );
  }

  const { imagenes, nombre, precioTexto, descripcion, colores } = producto;

  const prev = () => setImgIdx(i => (i - 1 + imagenes.length) % imagenes.length);
  const next = () => setImgIdx(i => (i + 1) % imagenes.length);

  const handleAgregar = () => {
    agregarProducto(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  const handleWhatsApp = () => {
    const mensaje = `Hola! Me interesa el producto: ${nombre} (${precioTexto}). ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-primary/50 hover:text-primary transition-colors text-sm font-semibold mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Galería */}
          <div>
            <div className="aspect-[4/5] bg-surface rounded-md overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={imagenes[imgIdx]}
                  alt={`${nombre} - foto ${imgIdx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {imagenes.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-opacity md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-4 h-4 text-primary" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-opacity md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {imagenes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        aria-label={`Ver foto ${i + 1}`}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === imgIdx ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {imagenes.length > 1 && (
              <div className="flex gap-3 mt-4">
                {imagenes.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                      i === imgIdx ? 'border-secondary' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={src} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-serif text-primary mb-2">{nombre}</h1>
              <p className="text-2xl font-bold text-secondary">{precioTexto}</p>
            </div>

            {colores && colores.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Color</p>
                <p className="text-primary font-serif capitalize">{colores[0]}</p>
              </div>
            )}

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Descripción</p>
              <p className="text-primary/70 leading-relaxed">{descripcion}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleAgregar}
                className={`flex items-center gap-2 w-full justify-center py-3.5 px-6 rounded-full font-semibold transition-all duration-200 ${
                  agregado
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:bg-primary/80'
                }`}
              >
                {agregado ? (
                  <><Check className="w-5 h-5" /> Agregado al carrito</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Agregar al carrito</>
                )}
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 w-full justify-center py-3.5 px-6 rounded-full font-semibold bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors"
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
