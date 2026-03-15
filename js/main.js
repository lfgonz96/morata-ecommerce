/**
 * MORATA - Datos de Productos, Galería y Catálogo
 * Gualeguay, Entre Ríos
 *
 * ESTRUCTURA DE IMÁGENES:
 * ─ Productos con variantes de color: campo `variantes[]`
 *   Cada variante tiene `nombre`, `color` (hex) e `images[]` (rutas de fotos)
 * ─ Productos sin variantes de color: campo `images[]` directamente
 *   (galería de ángulos/detalles, sin selector de color)
 * ─ Si no hay imágenes o no cargan, se muestra el emoji como fallback.
 *
 * PARA AGREGAR FOTOS REALES:
 *   Copiá cada imagen en la ruta indicada. El nombre debe coincidir exactamente.
 *   Carpeta base: img/  dentro de E-COMMERCE/
 */

const PRODUCTOS = [

  // ─────────────────────────────────────────────
  //  CARTUCHERAS
  //  6 variantes reales — fotos en img/cartucheras/
  // ─────────────────────────────────────────────
  {
    id: 'cartuchera-001',
    nombre: 'Cartuchera Artesanal',
    descripcion: 'Cartuchera confeccionada a mano con telas seleccionadas. Ideal para estudio y trabajo. Disponible en 6 diseños.',
    emoji: '🎒',
    categoria: 'cartucheras',
    precioMayorista: 3500,
    precioMinorista: 5800,
    minMayorista: 6,
    badge: null,
    destacado: true,
    variantes: [
      {
        nombre: 'Rosa',
        color: '#D4789A',
        // 📷 Carpeta origen: "1- CART ROSA"
        // Copiá las fotos como: img/cartucheras/rosa-1.jpg, rosa-2.jpg ...
        images: [
          'img/cartucheras/rosa-1.jpg',
          'img/cartucheras/rosa-2.jpg',
          'img/cartucheras/rosa-3.jpg',
          'img/cartucheras/rosa-4.jpg',
        ]
      },
      {
        nombre: 'Rosita',
        color: '#F2B5C9',
        // 📷 Carpeta origen: "2- CART ROSITA"
        images: [
          'img/cartucheras/rosita-1.jpg',
          'img/cartucheras/rosita-2.jpg',
          'img/cartucheras/rosita-3.jpg',
          'img/cartucheras/rosita-4.jpg',
        ]
      },
      {
        nombre: 'Blanca',
        color: '#EDE8DF',
        // 📷 Carpeta origen: "3- CART BLANCA"
        images: [
          'img/cartucheras/blanca-1.jpg',
          'img/cartucheras/blanca-2.jpg',
          'img/cartucheras/blanca-3.jpg',
          'img/cartucheras/blanca-4.jpg',
        ]
      },
      {
        nombre: 'Blanca y Verde',
        color: '#8FBC8F',
        // 📷 Carpeta origen: "4- CART BLANCA Y VERD"
        images: [
          'img/cartucheras/blanca-verde-1.jpg',
          'img/cartucheras/blanca-verde-2.jpg',
          'img/cartucheras/blanca-verde-3.jpg',
          'img/cartucheras/blanca-verde-4.jpg',
        ]
      },
      {
        nombre: 'Colores',
        color: '#C1440E',
        // 📷 Carpeta origen: "5- CART COLORES"
        images: [
          'img/cartucheras/colores-1.jpg',
          'img/cartucheras/colores-2.jpg',
          'img/cartucheras/colores-3.jpg',
          'img/cartucheras/colores-4.jpg',
        ]
      },
      {
        nombre: 'Simples',
        color: '#C8A96E',
        // 📷 Carpeta origen: "6- CART SIMPLES"
        images: [
          'img/cartucheras/simples-1.jpg',
          'img/cartucheras/simples-2.jpg',
          'img/cartucheras/simples-3.jpg',
          'img/cartucheras/simples-4.jpg',
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  //  BOLSITOS DE TERMOS Y MATES
  // ─────────────────────────────────────────────
  {
    id: 'bolsito-termo-001',
    nombre: 'Bolsito para Termo',
    descripcion: 'Porta-termo artesanal con asa reforzada. Compatible con termos estándar. Diseños únicos hechos en Gualeguay.',
    emoji: '🧴',
    categoria: 'bolsitos-termos',
    precioMayorista: 4200,
    precioMinorista: 6900,
    minMayorista: 6,
    badge: 'Popular',
    destacado: true,
    variantes: [
      {
        nombre: 'Terracota',
        color: '#C1440E',
        images: [
          'img/bolsitos-termos/termo-terracota-1.jpg',
          'img/bolsitos-termos/termo-terracota-2.jpg',
          'img/bolsitos-termos/termo-terracota-3.jpg',
        ]
      },
      {
        nombre: 'Azul',
        color: '#2C5F8A',
        images: [
          'img/bolsitos-termos/termo-azul-1.jpg',
          'img/bolsitos-termos/termo-azul-2.jpg',
        ]
      },
      {
        nombre: 'Rosa',
        color: '#D4789A',
        images: [
          'img/bolsitos-termos/termo-rosa-1.jpg',
          'img/bolsitos-termos/termo-rosa-2.jpg',
        ]
      },
      {
        nombre: 'Natural',
        color: '#C8A96E',
        images: [
          'img/bolsitos-termos/termo-natural-1.jpg',
          'img/bolsitos-termos/termo-natural-2.jpg',
        ]
      },
    ]
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
    destacado: false,
    variantes: [
      {
        nombre: 'Rosa',
        color: '#D4789A',
        images: [
          'img/bolsitos-termos/mate-rosa-1.jpg',
          'img/bolsitos-termos/mate-rosa-2.jpg',
        ]
      },
      {
        nombre: 'Verde',
        color: '#5E9E6B',
        images: [
          'img/bolsitos-termos/mate-verde-1.jpg',
          'img/bolsitos-termos/mate-verde-2.jpg',
        ]
      },
      {
        nombre: 'Marrón',
        color: '#8B5E3C',
        images: [
          'img/bolsitos-termos/mate-marron-1.jpg',
          'img/bolsitos-termos/mate-marron-2.jpg',
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  //  MATES  (galería de ángulos, sin selector de color)
  // ─────────────────────────────────────────────
  {
    id: 'mate-calabaza-001',
    nombre: 'Mate Calabaza Natural',
    descripcion: 'Mate de calabaza curado artesanalmente. Listo para usar. Cada pieza es única, cultivada y trabajada en Gualeguay, Entre Ríos.',
    emoji: '🥢',
    categoria: 'mates',
    precioMayorista: 5500,
    precioMinorista: 9000,
    minMayorista: 4,
    badge: 'Nuevo',
    destacado: true,
    // Sin variantes de color — solo galería de ángulos
    // 📷 Agregá las fotos en estas rutas:
    images: [
      'img/mates/calabaza-1.jpg',   // vista frontal
      'img/mates/calabaza-2.jpg',   // vista superior (boca)
      'img/mates/calabaza-3.jpg',   // vista lateral
      'img/mates/calabaza-4.jpg',   // detalle base
    ]
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
    destacado: true,
    images: [
      'img/mates/torneado-1.jpg',   // vista frontal
      'img/mates/torneado-2.jpg',   // vista superior
      'img/mates/torneado-3.jpg',   // detalle textura madera
    ]
  },

  // ─────────────────────────────────────────────
  //  BOMBILLAS  (galería de ángulos, sin selector de color)
  // ─────────────────────────────────────────────
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
    destacado: false,
    images: [
      'img/bombillas/acero-1.jpg',   // vista completa
      'img/bombillas/acero-2.jpg',   // detalle filtro
      'img/bombillas/acero-3.jpg',   // en uso con mate
    ]
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
    destacado: false,
    images: [
      'img/bombillas/alpaca-1.jpg',  // vista completa
      'img/bombillas/alpaca-2.jpg',  // detalle espiral
    ]
  },

  // ─────────────────────────────────────────────
  //  BOLSITOS
  // ─────────────────────────────────────────────
  {
    id: 'bolsito-multiusos-001',
    nombre: 'Bolsito Multiusos',
    descripcion: 'Bolsito versátil con asa y cierre. Perfecto para cosméticos, accesorios o como mini cartera. Confección artesanal.',
    emoji: '👜',
    categoria: 'bolsitos',
    precioMayorista: 3200,
    precioMinorista: 5300,
    minMayorista: 6,
    badge: null,
    destacado: false,
    variantes: [
      {
        nombre: 'Rosa',
        color: '#D4789A',
        images: [
          'img/bolsitos/multiusos-rosa-1.jpg',
          'img/bolsitos/multiusos-rosa-2.jpg',
        ]
      },
      {
        nombre: 'Azul',
        color: '#4A7FB5',
        images: [
          'img/bolsitos/multiusos-azul-1.jpg',
          'img/bolsitos/multiusos-azul-2.jpg',
        ]
      },
      {
        nombre: 'Blanco',
        color: '#E8E0D5',
        images: [
          'img/bolsitos/multiusos-blanco-1.jpg',
          'img/bolsitos/multiusos-blanco-2.jpg',
        ]
      },
    ]
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
    destacado: true,
    variantes: [
      {
        nombre: 'Multicolor',
        color: '#C8608A',
        images: [
          'img/bolsitos/grande-multicolor-1.jpg',
          'img/bolsitos/grande-multicolor-2.jpg',
          'img/bolsitos/grande-multicolor-3.jpg',
        ]
      },
      {
        nombre: 'Natural',
        color: '#C8A96E',
        images: [
          'img/bolsitos/grande-natural-1.jpg',
          'img/bolsitos/grande-natural-2.jpg',
        ]
      },
      {
        nombre: 'Verde',
        color: '#5E9E6B',
        images: [
          'img/bolsitos/grande-verde-1.jpg',
          'img/bolsitos/grande-verde-2.jpg',
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  //  YERBEROS
  //  📷 Carpeta origen: "7- YERBEROS"
  //  Copiá las fotos como: img/yerberos/yerbero-1.jpg, yerbero-2.jpg ...
  // ─────────────────────────────────────────────
  {
    id: 'yerbero-001',
    nombre: 'Yerbero Artesanal',
    descripcion: 'Yerbero confeccionado a mano, ideal para guardar y transportar la yerba. Diseño práctico y estético. Producto estrella de MORATA.',
    emoji: '🌿',
    categoria: 'yerberos',
    precioMayorista: 3800,
    precioMinorista: 6200,
    minMayorista: 6,
    badge: 'Nuevo',
    destacado: true,
    images: [
      'img/yerberos/yerbero-1.jpg',
      'img/yerberos/yerbero-2.jpg',
      'img/yerberos/yerbero-3.jpg',
      'img/yerberos/yerbero-4.jpg',
    ]
  }
];


// ════════════════════════════════════════════════════════
//  FUNCIONES GLOBALES DE GALERÍA
//  (llamadas desde atributos onclick en el HTML dinámico)
// ════════════════════════════════════════════════════════

/**
 * Cambia la imagen principal de un producto.
 * @param {string} pid   - id del producto
 * @param {string} src   - ruta de la nueva imagen
 * @param {HTMLElement|null} thumbEl - botón miniatura clickeado (para marcar activo)
 */
function cambiarImagen(pid, src, thumbEl) {
  const imgPrincipal = document.getElementById('img-main-' + pid);
  const emojiEl      = document.getElementById('emoji-' + pid);

  if (imgPrincipal) {
    imgPrincipal.src = src;
    imgPrincipal.style.display = '';
    if (emojiEl) emojiEl.style.display = 'none';
  }

  if (thumbEl) {
    const miniaturas = document.getElementById('miniaturas-' + pid);
    if (miniaturas) {
      miniaturas.querySelectorAll('.miniatura').forEach(t => t.classList.remove('activa'));
      thumbEl.classList.add('activa');
    }
  }
}

/**
 * Selecciona una variante de color y actualiza galería + miniaturas.
 * @param {string} pid   - id del producto
 * @param {number} idx   - índice de la variante en producto.variantes
 * @param {HTMLElement} btn - botón de variante clickeado
 */
function seleccionarVariante(pid, idx, btn) {
  const producto = PRODUCTOS.find(p => p.id === pid);
  if (!producto || !producto.variantes) return;
  const variante = producto.variantes[idx];
  if (!variante) return;

  // Cambiar imagen principal a la primera foto de la variante
  if (variante.images && variante.images.length > 0) {
    cambiarImagen(pid, variante.images[0], null);
  }

  // Regenerar miniaturas con las fotos de la variante
  const miniaturas = document.getElementById('miniaturas-' + pid);
  if (miniaturas && variante.images && variante.images.length > 1) {
    miniaturas.innerHTML = variante.images.map((src, i) => `
      <button class="miniatura${i === 0 ? ' activa' : ''}"
              onclick="cambiarImagen('${pid}', '${src}', this)"
              title="Foto ${i + 1}">
        <img src="${src}" alt="${producto.nombre} – foto ${i + 1}"
             onerror="this.parentElement.style.display='none'">
      </button>
    `).join('');
  } else if (miniaturas) {
    miniaturas.innerHTML = '';
  }

  // Marcar variante activa
  const card = btn.closest('.producto-card');
  if (card) {
    card.querySelectorAll('.variante-btn').forEach(b => b.classList.remove('activa'));
    btn.classList.add('activa');
    const nombreEl = document.getElementById('variante-nombre-' + pid);
    if (nombreEl) nombreEl.textContent = variante.nombre;
  }
}


// ════════════════════════════════════════════════════════
//  RENDER
// ════════════════════════════════════════════════════════

/**
 * Construye el HTML de una tarjeta de producto.
 * Soporta: variantes de color + galería, solo galería, o solo emoji.
 */
const renderCard = (p, delay = 0) => {
  const tieneVariantes = p.variantes && p.variantes.length > 0;
  const primeraVariante = tieneVariantes ? p.variantes[0] : null;

  // Imágenes a mostrar inicialmente
  const imagenesActuales = tieneVariantes
    ? primeraVariante.images
    : (p.images || []);

  const imgPrincipal = imagenesActuales[0] || '';
  const masImagenes   = imagenesActuales.slice(1);

  // ── Galería principal ──
  const galeriaHTML = `
    <div class="galeria-principal">
      <img
        id="img-main-${p.id}"
        src="${imgPrincipal}"
        alt="${p.nombre}"
        class="img-principal"
        onerror="this.style.display='none';document.getElementById('emoji-${p.id}').style.display='flex'"
        ${!imgPrincipal ? 'style="display:none"' : ''}
      />
      <div class="producto-icon" id="emoji-${p.id}" style="display:${imgPrincipal ? 'none' : 'flex'}">${p.emoji}</div>
    </div>
  `;

  // ── Miniaturas ──
  const miniaturas = imagenesActuales.length > 1 ? `
    <div class="galeria-miniaturas" id="miniaturas-${p.id}">
      <button class="miniatura activa"
              onclick="cambiarImagen('${p.id}', '${imagenesActuales[0]}', this)"
              title="Foto 1">
        <img src="${imagenesActuales[0]}" alt="foto 1"
             onerror="this.parentElement.style.display='none'">
      </button>
      ${masImagenes.map((src, i) => `
        <button class="miniatura"
                onclick="cambiarImagen('${p.id}', '${src}', this)"
                title="Foto ${i + 2}">
          <img src="${src}" alt="foto ${i + 2}"
               onerror="this.parentElement.style.display='none'">
        </button>
      `).join('')}
    </div>
  ` : `<div class="galeria-miniaturas" id="miniaturas-${p.id}"></div>`;

  // ── Selector de variantes ──
  const variantesHTML = tieneVariantes ? `
    <div class="variantes-container">
      <div class="variantes-header">
        <span class="variante-label">Color:</span>
        <span class="variante-nombre-actual" id="variante-nombre-${p.id}">${primeraVariante.nombre}</span>
      </div>
      <div class="variantes-botones">
        ${p.variantes.map((v, i) => `
          <button class="variante-btn${i === 0 ? ' activa' : ''}"
                  style="background:${v.color}"
                  onclick="seleccionarVariante('${p.id}', ${i}, this)"
                  title="${v.nombre}"
                  aria-label="Color ${v.nombre}">
          </button>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div class="producto-card fade-in-up" data-id="${p.id}" style="animation-delay:${delay}s">
      ${p.badge ? `<div class="producto-badge${p.badge === 'Nuevo' ? ' nuevo' : ''}">${p.badge}</div>` : ''}

      <div class="producto-galeria">
        ${galeriaHTML}
        ${miniaturas}
      </div>

      <div class="producto-info">
        <div class="producto-nombre">${p.nombre}</div>
        ${variantesHTML}
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
          <button class="btn-agregar"
                  onclick="Carrito.agregar(PRODUCTOS.find(p=>p.id==='${p.id}'), 'minorista')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Agregar
          </button>
          <button class="btn-mayorista-producto"
                  onclick="Carrito.agregar(PRODUCTOS.find(p=>p.id==='${p.id}'), 'mayorista')">
            🏷️ Mayor.
          </button>
        </div>
      </div>
    </div>
  `;
};

/**
 * Renderiza productos en un contenedor, con filtro opcional por categoría.
 */
const renderProductos = (filtro = 'todos', contenedorId = 'productos-grid') => {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const lista = filtro === 'todos'
    ? PRODUCTOS
    : PRODUCTOS.filter(p => p.categoria === filtro);

  contenedor.innerHTML = lista.map((p, i) => renderCard(p, (i % 4) * 0.1)).join('');
};

/**
 * Alias para catalogo.html — renderiza una categoría en su grid específico.
 */
const renderCategoria = (filtro, gridId) => renderProductos(filtro, gridId);


// ════════════════════════════════════════════════════════
//  FILTROS
// ════════════════════════════════════════════════════════

const initFiltros = () => {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      renderProductos(btn.dataset.filtro);
    });
  });
};


// ════════════════════════════════════════════════════════
//  FORMULARIO CONTACTO
// ════════════════════════════════════════════════════════

const initFormContacto = () => {
  const form = document.getElementById('form-contacto');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre  = form.querySelector('#nombre').value;
    const telefono = form.querySelector('#telefono').value;
    const asunto  = form.querySelector('#asunto').value;
    const mensaje = form.querySelector('#mensaje').value;
    const tipo    = form.querySelector('#tipo').value;

    const texto = `¡Hola MORATA! Soy *${nombre}* 👋%0A%0A*Tipo:* ${tipo}%0A*Asunto:* ${asunto}%0A*Teléfono:* ${telefono}%0A%0A${mensaje}`;
    // Número principal para consultas: +54 9 3444 40-8459
    window.open(`https://wa.me/5493444408459?text=${texto}`, '_blank');

    mostrarToast('✓ ¡Mensaje enviado correctamente!', 'exito');
    form.reset();
  });
};


// ════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderProductos('todos');
  initFiltros();
  initFormContacto();
});
