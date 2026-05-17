import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Producto } from '../data/productos';

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface CarritoContextType {
  items: ItemCarrito[];
  agregarProducto: (producto: Producto, cantidad?: number) => void;
  eliminarProducto: (productoId: string) => void;
  actualizarCantidad: (productoId: string, cantidad: number) => void;
  vaciarCarrito: () => void;
  total: number;
  cantidadTotal: number;
  modalAbierto: boolean;
  abrirModal: () => void;
  cerrarModal: () => void;
}

const CarritoContext = createContext<CarritoContextType | null>(null);

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>(() => {
    try {
      const stored = localStorage.getItem('morata-carrito');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    localStorage.setItem('morata-carrito', JSON.stringify(items));
  }, [items]);

  const agregarProducto = (producto: Producto, cantidad = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.producto.id === producto.id);
      if (existing) {
        return prev.map(i =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + cantidad } : i
        );
      }
      return [...prev, { producto, cantidad }];
    });
  };

  const eliminarProducto = (productoId: string) => {
    setItems(prev => prev.filter(i => i.producto.id !== productoId));
  };

  const actualizarCantidad = (productoId: string, cantidad: number) => {
    if (cantidad <= 0) {
      eliminarProducto(productoId);
      return;
    }
    setItems(prev =>
      prev.map(i => i.producto.id === productoId ? { ...i, cantidad } : i)
    );
  };

  const vaciarCarrito = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.producto.precio * i.cantidad, 0);
  const cantidadTotal = items.reduce((sum, i) => sum + i.cantidad, 0);

  return (
    <CarritoContext.Provider value={{
      items,
      agregarProducto,
      eliminarProducto,
      actualizarCantidad,
      vaciarCarrito,
      total,
      cantidadTotal,
      modalAbierto,
      abrirModal: () => setModalAbierto(true),
      cerrarModal: () => setModalAbierto(false),
    }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return ctx;
}
