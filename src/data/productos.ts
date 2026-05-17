export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  precioTexto: string;
  descripcion: string;
  categoria: 'bolsitos' | 'cartucheras' | 'mates';
  imagenes: string[];
  colores?: string[];
  destacado?: boolean;
}

export const productos: Producto[] = [
  {
    id: 'kit-matero-premium-verde',
    nombre: 'Kit Matero Premium Reforzado',
    precio: 35000,
    precioTexto: '$35.000',
    descripcion: 'El Kit incluye una azucarera y un portamate, elementos esenciales que complementan la experiencia de compartir un buen momento. Su diseño práctico y funcional lo convierte en el compañero perfecto para picnics, reuniones o simplemente disfrutar en casa.',
    categoria: 'bolsitos',
    imagenes: [
      '/productos/bolsitos/verde/FRONT.webp',
      '/productos/bolsitos/verde/BACK.webp',
      '/productos/bolsitos/verde/Las 3.webp',
    ],
    colores: ['verde'],
    destacado: true,
  },
  {
    id: 'kit-matero-premium-azul',
    nombre: 'Kit Matero Premium Reforzado',
    precio: 35000,
    precioTexto: '$35.000',
    descripcion: 'El Kit incluye una azucarera y un portamate, elementos esenciales que complementan la experiencia de compartir un buen momento. Su diseño práctico y funcional lo convierte en el compañero perfecto para picnics, reuniones o simplemente disfrutar en casa.',
    categoria: 'bolsitos',
    imagenes: [
      '/productos/bolsitos/azul/frente.webp',
      '/productos/bolsitos/azul/kit.webp',
    ],
    colores: ['azul'],
    destacado: false,
  },
];
