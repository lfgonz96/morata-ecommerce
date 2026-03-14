/**
 * MORATA - Sistema de Carrito de Compras
 */

const Carrito = (() => {
  let items = JSON.parse(localStorage.getItem('morata_carrito') || '[]');

  const guardar = () => {
    localStorage.setItem('morata_carrito', JSON.stringify(items));
    actualizar();
  };

  const actualizar = () => {
    const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);

    // Badge navbar
    const badge = document.getElementById('carrito-badge');
    if (badge) {
      badge.textContent = cantidad;
      badge.style.display = cantidad > 0 ? 'flex' : 'none';
    }

    // Total footer carrito
    const totalEl = document.getElementById('carrito-total-valor');
    if (totalEl) totalEl.textContent = formatearPrecio(total);

    const subtotalEl = document.getElementById('carrito-subtotal-valor');
    if (subtotalEl) subtotalEl.textContent = formatearPrecio(total);

    // Resumen modal
    const resumenTotal = document.getElementById('resumen-total');
    if (resumenTotal) resumenTotal.textContent = formatearPrecio(total);

    renderItems();
  };

  const formatearPrecio = (num) => {
    return '$ ' + num.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const renderItems = () => {
    const contenedor = document.getElementById('carrito-items');
    const vacioPanel = document.getElementById('carrito-vacio');
    if (!contenedor) return;

    if (items.length === 0) {
      contenedor.innerHTML = '';
      if (vacioPanel) vacioPanel.style.display = 'flex';
      return;
    }

    if (vacioPanel) vacioPanel.style.display = 'none';

    contenedor.innerHTML = items.map(item => `
      <div class="carrito-item" data-id="${item.id}">
        <div class="carrito-item-icon">${item.emoji}</div>
        <div class="carrito-item-info">
          <div class="carrito-item-nombre">${item.nombre}</div>
          <div class="carrito-item-tipo">${item.tipo === 'mayorista' ? '🏷️ Precio mayorista' : '🛍️ Precio minorista'}</div>
          <div class="carrito-item-controles">
            <button class="qty-btn" onclick="Carrito.cambiarCantidad('${item.id}', -1)">−</button>
            <span class="qty-num">${item.cantidad}</span>
            <button class="qty-btn" onclick="Carrito.cambiarCantidad('${item.id}', 1)">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <div class="carrito-item-precio">${formatearPrecio(item.precio * item.cantidad)}</div>
          <button class="btn-eliminar-item" onclick="Carrito.eliminar('${item.id}')" title="Eliminar">✕</button>
        </div>
      </div>
    `).join('');
  };

  const agregar = (producto, tipo) => {
    const id = `${producto.id}_${tipo}`;
    const precio = tipo === 'mayorista' ? producto.precioMayorista : producto.precioMinorista;
    const existente = items.find(i => i.id === id);

    if (existente) {
      existente.cantidad += 1;
    } else {
      items.push({
        id,
        nombre: producto.nombre,
        emoji: producto.emoji,
        precio,
        tipo,
        cantidad: 1
      });
    }

    guardar();
    mostrarToast(`✓ ${producto.nombre} agregado al carrito`);
    abrirCarrito();
  };

  const eliminar = (id) => {
    items = items.filter(i => i.id !== id);
    guardar();
  };

  const cambiarCantidad = (id, delta) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) {
      items = items.filter(i => i.id !== id);
    }
    guardar();
  };

  const obtenerTotal = () => {
    return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const obtenerItems = () => items;

  const abrirCarrito = () => {
    document.getElementById('carrito-overlay')?.classList.add('abierto');
    document.getElementById('carrito-sidebar')?.classList.add('abierto');
    document.body.style.overflow = 'hidden';
  };

  const cerrarCarrito = () => {
    document.getElementById('carrito-overlay')?.classList.remove('abierto');
    document.getElementById('carrito-sidebar')?.classList.remove('abierto');
    document.body.style.overflow = '';
  };

  // Inicializar
  const init = () => {
    actualizar();

    document.getElementById('carrito-overlay')?.addEventListener('click', cerrarCarrito);
    document.getElementById('btn-cerrar-carrito')?.addEventListener('click', cerrarCarrito);
    document.getElementById('btn-abrir-carrito')?.addEventListener('click', abrirCarrito);

    document.getElementById('btn-checkout')?.addEventListener('click', () => {
      if (items.length === 0) {
        mostrarToast('⚠️ Tu carrito está vacío', 'error');
        return;
      }
      cerrarCarrito();
      setTimeout(() => abrirModalPago(), 300);
    });
  };

  return { agregar, eliminar, cambiarCantidad, obtenerTotal, obtenerItems, abrirCarrito, cerrarCarrito, init };
})();

// ===== MODAL DE PAGO =====
let metodoPagoSeleccionado = null;

const abrirModalPago = () => {
  const modal = document.getElementById('modal-pago');
  if (!modal) return;
  modal.classList.add('abierto');
  document.body.style.overflow = 'hidden';

  const total = Carrito.obtenerTotal();
  const resumenEl = document.getElementById('resumen-total');
  if (resumenEl) resumenEl.textContent = '$ ' + total.toLocaleString('es-AR', { minimumFractionDigits: 0 });

  const itemsEl = document.getElementById('resumen-items');
  if (itemsEl) itemsEl.textContent = `${Carrito.obtenerItems().reduce((a, i) => a + i.cantidad, 0)} producto(s)`;
};

const cerrarModalPago = () => {
  document.getElementById('modal-pago')?.classList.remove('abierto');
  document.body.style.overflow = '';
};

// ===== TOAST =====
const mostrarToast = (mensaje, tipo = 'normal') => {
  let toast = document.getElementById('toast-global');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-global';
    toast.className = 'toast-notificacion';
    document.body.appendChild(toast);
  }

  toast.textContent = mensaje;
  toast.className = `toast-notificacion visible${tipo === 'exito' ? ' exito' : ''}`;

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
};

// ===== WHATSAPP FLOTANTE =====
const initWhatsApp = () => {
  const btn = document.getElementById('wa-btn-principal');
  const numeros = document.getElementById('wa-numeros');

  if (!btn || !numeros) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    numeros.classList.toggle('visible');
  });

  document.addEventListener('click', () => {
    numeros.classList.remove('visible');
  });
};

// ===== MENÚ MÓVIL =====
const initMenuMovil = () => {
  const btnMenu = document.getElementById('btn-menu');
  const navLinks = document.getElementById('nav-links');

  if (!btnMenu || !navLinks) return;

  btnMenu.addEventListener('click', () => {
    navLinks.classList.toggle('abierto');
    const spans = btnMenu.querySelectorAll('span');
    const abierto = navLinks.classList.contains('abierto');
    if (abierto) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('abierto');
    });
  });
};

// ===== SELECCIÓN MÉTODO PAGO =====
const initMetodosPago = () => {
  document.querySelectorAll('.metodo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.metodo-btn').forEach(b => b.classList.remove('seleccionado'));
      btn.classList.add('seleccionado');
      metodoPagoSeleccionado = btn.dataset.metodo;
    });
  });

  document.getElementById('btn-pagar')?.addEventListener('click', () => {
    if (!metodoPagoSeleccionado) {
      mostrarToast('⚠️ Seleccioná un método de pago', 'error');
      return;
    }

    const total = Carrito.obtenerTotal();
    // Número secundario para pedidos del carrito: +54 9 3444 44-7269
    const numeroWA = '5493444447269';
    const items = Carrito.obtenerItems();

    const detalle = items
      .map(i => `- ${i.nombre} x${i.cantidad} (${i.tipo === 'mayorista' ? 'mayorista' : 'minorista'}) - $${(i.precio * i.cantidad).toLocaleString('es-AR')}`)
      .join('%0A');

    const mensaje =
      `Hola!%20Estoy%20interesado%20en%20comprar%20los%20siguientes%20productos:%0A%0A` +
      `${detalle}%0A%0A` +
      `Total:%20$${total.toLocaleString('es-AR')}%0A` +
      `M%C3%A9todo%20de%20pago:%20${encodeURIComponent(metodoPagoSeleccionado)}%0A%0A` +
      `%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad%20y%20forma%20de%20env%C3%ADo%3F%20Gracias!`;

    window.open(`https://wa.me/${numeroWA}?text=${mensaje}`, '_blank');
    cerrarModalPago();
    mostrarToast('✓ ¡Pedido enviado por WhatsApp!', 'exito');
  });

  document.getElementById('btn-cerrar-modal')?.addEventListener('click', cerrarModalPago);
  document.getElementById('modal-pago')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) cerrarModalPago();
  });
};

// ===== INIT GLOBAL =====
document.addEventListener('DOMContentLoaded', () => {
  Carrito.init();
  initWhatsApp();
  initMenuMovil();
  initMetodosPago();

  // Marcar enlace activo
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('activo');
  });

  // Scroll suave navbar
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (current > 80) {
        navbar.style.boxShadow = '0 4px 30px rgba(92,51,23,0.18)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(92,51,23,0.1)';
      }
    }
    lastScroll = current;
  });

  // Animaciones al scroll
  const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observador.observe(el);
  });
});
