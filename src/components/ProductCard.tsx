import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import type { Producto } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';

interface ProductCardProps {
  producto: Producto;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto, delay = 0 }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [agregado, setAgregado] = useState(false);
  const { agregarProducto } = useCarrito();
  const { imagenes, nombre, precioTexto, destacado } = producto;

  const prev = () => setImgIdx(i => (i - 1 + imagenes.length) % imagenes.length);
  const next = () => setImgIdx(i => (i + 1) % imagenes.length);

  const handleAgregar = () => {
    agregarProducto(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      {/* Carrusel */}
      <Link to={`/producto/${producto.id}`} className="block">
      <div className="aspect-[4/5] bg-surface rounded-md overflow-hidden mb-6 relative cursor-pointer">
        <img
          src={imagenes[imgIdx]}
          alt={`${nombre} - foto ${imgIdx + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {destacado && (
          <div className="absolute top-4 left-4">
            <div className="bg-accent/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
              Destacado
            </div>
          </div>
        )}
        {imagenes.length > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-opacity md:opacity-0 md:group-hover:opacity-100"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-opacity md:opacity-0 md:group-hover:opacity-100"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {imagenes.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setImgIdx(i); }}
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
      </Link>

      <h4 className="text-xl font-serif text-primary mb-1">{nombre}</h4>
      <p className="text-secondary font-bold tracking-tight mb-4">{precioTexto}</p>
      <button
        onClick={handleAgregar}
        className={`flex items-center gap-2 w-full justify-center py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-200 ${
          agregado
            ? 'bg-green-500 text-white'
            : 'bg-primary text-white hover:bg-primary/80'
        }`}
      >
        {agregado ? (
          <><Check className="w-4 h-4" /> Agregado</>
        ) : (
          <><ShoppingCart className="w-4 h-4" /> Agregar al carrito</>
        )}
      </button>
    </motion.div>
  );
};

export default ProductCard;
