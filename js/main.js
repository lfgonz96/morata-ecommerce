/**
 * MORATA - Datos de Productos y Catálogo
 */

const PRODUCTOS = [
  {
    id: 'cartuchera-001',
    nombre: 'Cartuchera Artesanal',
    descripcion: 'Cartuchera confeccionada a mano con telas seleccionadas. Ideal para estudio y trabajo. Variedad de colores y estampados.',
    emoji: '🎒',
    categoria: 'cartucheras',
    precioMayorista: 3500,
    precioMinorista: 5800,
    minMayorista: 6,
    badge: null,
    destacado: true
  },
  {
    id: 'bolsito-termo-001',
    nombre: 'Bolsito para Termo',
    descripcion: 'Porta-termo artesanal con asa reforzada. Compatible con termos estándar. Diseños únicos hechos en Entre Ríos.',
    emoji: '🧴',
    categoria: 'bolsitos-termos',
    precioMayorista: 4200,
    precioMinorista: 6900,
    minMayorista: 6,
    badge: 'Popular',
    destacado: true
  },
  {
    id: 'bolsito-mate-001',
    nombre: 'Bolsito para Mate',
    descripcion: 'Porta-mate artesanal diseñado para proteger tu mate. Incluye bolsillo interior. Múltiples diseños disponibles.',
    emoji: '🫖',
    categoria: 'bolsitos-termos',
    precioMayorista: 3800,
    precioMinorista: 6200,
    minMayorista: 6,
    badge: null,
    destacado: false
  },
  {
    id: 'mate-calabaza-001',
    nombre: 'Mate Calabaza Natural',
    descripcion: 'Mate de calabaza curado artesanalmente. Listo para usar. Cada pieza es única, cultivada y trabajada en Entre Ríos.',
    emoji: '🥢',
    categoria: 'mates',
    precioMayorista: 5500,
    precioMinorista: 9000,
    minMayorista: 4,
    badge: 'Nuevo',
    destacado: true
  },
  {
    id: 'mate-torneado-001',
    nombre: 'Mate Torneado en Madera',
    descripcion: 'Mate artesanal torneado en madera nativa. Terminación impecable, curado con aceite natural. Pieza de colección.',
    emoji: '🪵',
    categoria: 'mates',
    precioMayorista: 7200,
    precioMinorista: 12000,
    minMayorista: 4,
    badge: 'Premium',
    destacado: true
  },
  {
    id: 'bombilla-acero-001',
    nombre: 'Bombilla de Acero Inox.',
    descripcion: 'Bombilla de acero inoxidable 316L, filtro tipo pala ancha. Higiénica y duradera. Ideal para todo tipo de mate.',
    emoji: '🥄',
    categoria: 'bombillas',
    precioMayorista: 2200,
    precioMinorista: 3800,
    minMayorista: 12,
    badge: null,
    destacado: false
  },
  {
    id: 'bombilla-alpaca-001',
    nombre: 'Bombilla de Alpaca',
    descripcion: 'Bombilla de alpaca con filtro espiral. Tradicional y elegante. Terminación artesanal pulida a mano.',
    emoji: '✨',
    categoria: 'bombillas',
    precioMayorista: 3000,
    precioMinorista: 5000,
    minMayorista: 12,
    badge: 'Nuevo',
    destacado: false
  },
  {
    id: 'bolsito-multipropósito-001',
    nombre: 'Bolsito Multiusos',
    descripcion: 'Bolsito versátil con asa y cierre. Perfecto para cosméticos, accesorios o como mini cartera. Confección artesanal.',
    emoji: '👜',
    categoria: 'bolsitos',
    precioMayorista: 3200,
    precioMinorista: 5300,
    minMayorista: 6,
    badge: null,
    destacado: false
  },
  {
    id: 'bolsito-grande-001',
    nombre: 'Bolsito Grande Artesanal',
    descripcion: 'Bolsito amplio con correa ajustable. Ideal como cartera o bolso de mano. Diseños únicos en telas seleccionadas.',
    emoji: '🛍️',
    categoria: 'bolsitos',
    precioMayorista: 4500,
    precioMinorista: 7500,
    minMayorista: 6,
    badge: 'Popular',
    destacado: true
  }
];

// ===== RENDER DE PRODUCTOS =====
const renderProductos = (filtro = 'todos', contenedorId = 'productos-grid') => {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const filtrados = filtro === 'todos'
    ? PRODUCTOS
    : PRODUCTOS.filter(p => p.categoria === filtro);

  contenedor.innerHTML = filtrados.map((p, i) => `
    <div class="producto-card fade-in-up" style="animation-delay:${(i % 4) * 0.1}s">
      ${p.badge ? `<div class="producto-badge ${p.badge === 'Nuevo' ? 'nuevo' : ''}">${p.badge}</div>` : ''}
      <div class="producto-imagen">
        <div class="producto-icon">${p.emoji}</div>
      </div>
      <div class="producto-info">
        <div class="producto-nombre">${p.nombre}</div>
        <div class="producto-descripcion">${p.descripcion}</div>
        <div class="precios-container">
          <div class="precio-row">
            <span class="precio-tipo mayorista">🏷️ Mayorista</span>
            <span class="precio-valor">$ ${p.precioMayorista.toLocaleString('es-AR')}</span>
          </div>
          <div class="precio-row">
            <span class="precio-tipo minorista">🛍️ Minorista</span>
            <span class="precio-valor">$ ${p.precioMinorista.toLocaleString('es-AR')}</span>
          </div>
          <div class="precio-minimo">Mayorista: mínimo ${p.minMayorista} unidades</div>
        </div>
        <div class="producto-acciones">
          <button class="btn-agregar" onclick='Carrito.agregar(${JSON.stringify(p).replace(/'/g, "\\'")}, "minorista")'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Agregar
          </button>
          <button class="btn-mayorista-producto" onclick='Carrito.agregar(${JSON.stringify(p).replace(/'/g, "\\'")}, "mayorista")'>
            🏷️ Mayor.
          </button>
        </div>
      </div>
    </div>
  `).join('');
};

// ===== FILTROS =====
const initFiltros = () => {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      renderProductos(btn.dataset.filtro);
    });
  });
};

// ===== FORMULARIO CONTACTO =====
const initFormContacto = () => {
  const form = document.getElementById('form-contacto');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.querySelector('#nombre').value;
    const telefono = form.querySelector('#telefono').value;
    const asunto = form.querySelector('#asunto').value;
    const mensaje = form.querySelector('#mensaje').value;
    const tipo = form.querySelector('#tipo').value;

    const texto = `¡Hola MORATA! Soy *${nombre}* 👋%0A%0A*Tipo:* ${tipo}%0A*Asunto:* ${asunto}%0A*Teléfono:* ${telefono}%0A%0A${mensaje}`;
    window.open(`https://wa.me/5434444082459?text=${texto}`, '_blank');

    mostrarToast('✓ ¡Mensaje enviado correctamente!', 'exito');
    form.reset();
  });
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProductos('todos');
  initFiltros();
  initFormContacto();
});
