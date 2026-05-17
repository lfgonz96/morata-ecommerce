import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import type { Producto } from '../data/productos';

interface ProductCardProps {
  producto: Producto;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="aspect-[4/5] bg-surface rounded-md overflow-hidden mb-6 relative">
        <img
          src={producto.imagenes[0]}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {producto.destacado && (
          <div className="absolute top-4 left-4">
            <div className="bg-accent/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
              Destacado
            </div>
          </div>
        )}
      </div>
      <h4 className="text-xl font-serif text-primary mb-1">{producto.nombre}</h4>
      <p className="text-secondary font-bold tracking-tight mb-4">{producto.precioTexto}</p>
      <button className="flex items-center gap-2 w-full justify-center bg-primary text-white py-2.5 px-4 rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors duration-200">
        <ShoppingCart className="w-4 h-4" />
        Agregar al carrito
      </button>
    </motion.div>
  );
};

export default ProductCard;
