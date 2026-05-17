import React from 'react';
import { motion } from 'motion/react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  category?: string;
  handmade?: boolean;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, category, handmade, delay = 0 }) => {
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
          src={image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {handmade && (
          <div className="absolute top-4 left-4">
            <div className="bg-accent/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
              Handmade
            </div>
          </div>
        )}
      </div>
      {category && (
        <span className="text-[10px] uppercase font-bold text-primary/40 tracking-widest mb-1 block">
          {category}
        </span>
      )}
      <h4 className="text-xl font-serif text-primary mb-1">{title}</h4>
      <p className="text-secondary font-bold tracking-tight">{price}</p>
    </motion.div>
  );
};

export default ProductCard;

