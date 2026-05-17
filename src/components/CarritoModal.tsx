import { AnimatePresence, motion } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCarrito } from '../context/CarritoContext';

// Reemplazá con el número real de Lautaro (formato: 549 + código de área + número)
const WA_NUMBER = '5493444XXXXXX';

function formatPrecio(n: number) {
  return '$' + n.toLocaleString('es-AR');
}

export default function CarritoModal() {
  const {
    items, modalAbierto, cerrarModal,
    eliminarProducto, actualizarCantidad, vaciarCarrito,
    total, cantidadTotal,
  } = useCarrito();

  const handleWhatsApp = () => {
    const lineas = items
      .map(i => `- ${i.cantidad}x ${i.producto.nombre} (${i.producto.precioTexto})`)
      .join('\n');
    const mensaje = `Hola! Quiero hacer un pedido desde morata.com.ar:\n${lineas}\nTotal: ${formatPrecio(total)}\n¡Gracias!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {modalAbierto && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={cerrarModal}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-surface-dark">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-secondary" />
                <h2 className="text-2xl font-serif text-primary">Carrito</h2>
                {cantidadTotal > 0 && (
                  <span className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cantidadTotal}
                  </span>
                )}
              </div>
              <button
                onClick={cerrarModal}
                className="text-primary/50 hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-primary/20 mb-4" />
                  <p className="text-primary/50 font-serif text-lg">Tu carrito está vacío</p>
                  <button
                    onClick={cerrarModal}
                    className="mt-6 text-secondary font-semibold text-sm underline"
                  >
                    Ver catálogo
                  </button>
                </div>
              ) : (
                items.map(({ producto, cantidad }) => (
                  <div key={producto.id} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-surface">
                      <img
                        src={producto.imagenes[0]}
                        alt={producto.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-primary text-sm leading-tight mb-1">
                        {producto.nombre}
                      </h4>
                      <p className="text-secondary font-bold text-sm mb-3">
                        {producto.precioTexto}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => actualizarCantidad(producto.id, cantidad - 1)}
                          className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-sm w-4 text-center">{cantidad}</span>
                        <button
                          onClick={() => actualizarCantidad(producto.id, cantidad + 1)}
                          className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => eliminarProducto(producto.id)}
                      className="text-primary/30 hover:text-red-400 transition-colors self-start mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-surface-dark space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary/60 font-sans text-sm uppercase tracking-widest">
                    Total
                  </span>
                  <span className="text-2xl font-serif text-primary font-bold">
                    {formatPrecio(total)}
                  </span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-full font-bold text-base transition-colors"
                >
                  Finalizar pedido por WhatsApp
                </button>
                <button
                  onClick={vaciarCarrito}
                  className="w-full text-primary/40 hover:text-primary/60 text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
