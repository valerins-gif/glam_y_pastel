/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Valerins Tovar
   Ficha 3230489 · ADSO
   =========================================================== */

/* ===========================================================
1. ELEMENTOS
=========================================================== */
const spanAnio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const parrafoInicio = document.getElementById("parrafoInicio");
const enlaceExterno = document.getElementById("enlaceExterno");
const contador = document.getElementById("contador");
const lista = document.getElementById("lista");
const caja = document.getElementById("caja");
const btnDestacar = document.getElementById("btnDestacar");
const btnOcultar = document.getElementById("btnOcultar");
const btnColor = document.getElementById("btnColor");
const tabla = document.getElementById("tabla");
const filasTabla = document.querySelectorAll("#tabla tbody tr");
const campoProyecto = document.getElementById("campoProyecto");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnVaciar = document.getElementById("btnVaciar");
const campoMensaje = document.getElementById("campoMensaje");
const contadorLetras = document.getElementById("contadorLetras");
const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("campoNombre");
const avisoForm = document.getElementById("avisoForm");
const btnTema = document.getElementById("btnTema");
const inicioSection = document.getElementById("inicio");
const coleccionSection = document.getElementById("coleccion");
const contactoSection = document.getElementById("contacto");

/* ===========================================================
2. ESTADO 
=========================================================== */
const coloresCaja = ["#fef08a", "#bbf7d0", "#bae6fd", "#fbcfe8", "#e9d5ff"];
let posicionColor = 0;
let carrito = [];


const productosBD = [
  // Pijamas
  { id: 1, nombre: "Pijama Satin", modulo: "pijamas", precio: 45000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NHdu5Auu4KbQpeA6-w_xQ54SWYmWpYfSgZt0ZmJjJZ1d4N1kHpM5bQo&s=10" },
  { id: 2, nombre: "Set Pijama Satin ", modulo: "pijamas", precio: 35000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD2pSEqFVNcfSddiXxPGOoLzmuyzKyC_Lko_usJqx0Q&s=10" },
  { id: 3, nombre: "Set Pijama Durazno 3 pzas", modulo: "pijamas", precio: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalhS7PFTm5DbkWVyJHUwTksYeQUGToCa2HMvsIHv8INZwUki8O2DkU-o&s=10" },
  { id: 4, nombre: "Set Pijama durazno corta", modulo: "pijamas", precio: 40000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNG4B7YSj0b7GbplmYE7g5mXSjmywyLFCww6HjNxm_0g5lXsXcnHiFIw&s=10" },
  
  // Perfumes
  { id: 5, nombre: "Perfume Sweet Vanilla 100ml", modulo: "perfumes", precio: 78000, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400" },
  { id: 6, nombre: "Loción Body Mist Rose", modulo: "perfumes", precio: 48000, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400" },
  { id: 7, nombre: "Loción Pink", modulo: "perfumes", precio: 48000, img: "https://victoriassecretbeautyco.vtexassets.com/arquivos/ids/186751/112262053654_alt.jpg?v=638560815758700000"},
  { id: 8, nombre: "Loción Miss Dior", modulo: "perfumes", precio: 48000, img: "https://media.falabella.com/falabellaCO/28905922_6/w=1500,h=1500,fit=cover"},
  // Maquillaje
  { id: 9, nombre: "Paleta Sombras Lilac Dreams", modulo: "maquillaje", precio: 45000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfcIr8-oGiqVLTdblMseI3lvpsSTShF9A8osC24aYVsog6PtvE4g_Q3r7n&s=10" },
  { id: 10, nombre: "Lip Gloss Volume Pink", modulo: "maquillaje", precio: 28000, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400" },
  { id: 11, nombre: "Kit completo de maquillaje", modulo: "maquillaje", precio: 28000, img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400" },
  { id: 12, nombre: "Lip Combo", modulo: "maquillaje", precio: 28000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIIpvCMJwUczejFwEo_e3Dh8cjyGD56fgWWFb58Kypm8thNoLdDRgS_se&s=10" },

  // Calzado
  { id: 13, nombre: "Tacones Soft Pink Chic", modulo: "calzado", precio: 110000, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400" },
  { id: 14, nombre: "Sandalias Pastel Mint", modulo: "calzado", precio: 82000, img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400" },

  // Bolsos
  { id: 15, nombre: "Bolso Crossbody Pastel", modulo: "bolsos", precio: 85000, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400" },
  { id: 16, nombre: "Mini Bag Coquette Pink", modulo: "bolsos", precio: 68000, img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400" }
];

/* ===========================================================
3. FUNCIONES
=========================================================== */
// Misión 4: Conteo dinámico
function actualizarContador() {
  const total = lista.querySelectorAll("li").length;
  if (total === 0) {
    contador.textContent = "No hay elementos registrados.";
  } else if (total === 1) {
    contador.textContent = "1 elemento en lista.";
  } else {
    contador.textContent = `${total} elementos en lista.`;
  }
}

let gridProductosContainer;
let itemsCarritoContainer;
let totalPagarSpan;

function construirInterfazTiendaDOM() {
  // A. Cambiar texto del menú de navegación de "Proyectos" a "Catálogo"
  const enlacesNav = document.querySelectorAll(".menu .enlace");
  enlacesNav.forEach(enlace => {
    if (enlace.textContent.trim().toLowerCase() === "proyectos") {
      enlace.textContent = "Catálogo";
      enlace.setAttribute("href", "#coleccion");
    }
  });

  // B. OCULTAR LA CAJA Y LOS BOTONES SOBRANTES DE INICIO
  if (caja) caja.style.display = "none";
  if (inicioSection) {
    const accionesInicio = inicioSection.querySelector(".acciones");
    if (accionesInicio) accionesInicio.style.display = "none";
  }

  // C. OCULTAR ELEMENTOS ESTÁTICOS SECUNDARIOS DE COLECCIÓN
  if (lista) lista.style.display = "none";
  if (contador) contador.style.display = "none";
  if (tabla) tabla.style.display = "none";
  
  if (coleccionSection) {
    const accionesColeccion = coleccionSection.querySelector(".acciones");
    if (accionesColeccion) accionesColeccion.style.display = "none";

    const h2Coleccion = coleccionSection.querySelector("h2");
    if (h2Coleccion) {
      h2Coleccion.textContent = "Catálogo Glam & Pastel";
    }
  }

  if (contactoSection) {
    const h2Contacto = contactoSection.querySelector("h2");
    if (h2Contacto) {
      h2Contacto.textContent = "Finalizar Pedido & Carrito";
    }
  }

  // D. CREAR E INSERTAR BARRA DE MÓDULOS DE CATEGORÍA
  const modulosBar = document.createElement("div");
  modulosBar.className = "modulos-bar";

  const modulos = [
    { label: "Todos", key: "todos" },
    { label: "Pijamas ", key: "pijamas" },
    { label: "Perfumes ", key: "perfumes" },
    { label: "Maquillaje ", key: "maquillaje" },
    { label: "Calzado ", key: "calzado" },
    { label: "Bolsos ", key: "bolsos" }
  ];

  modulos.forEach((m, idx) => {
    const btn = document.createElement("button");
    btn.className = `btn-modulo ${idx === 0 ? 'activo' : ''}`;
    btn.textContent = m.label;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-modulo").forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      renderizarCatalogo(m.key);
    });
    modulosBar.appendChild(btn);
  });

  const h2ColeccionRef = coleccionSection.querySelector("h2");
  if (h2ColeccionRef) {
    h2ColeccionRef.after(modulosBar);
  }

  // E. CREAR CONTENEDOR GRID PARA LAS TARJETAS DE PRODUCTOS
  gridProductosContainer = document.createElement("div");
  gridProductosContainer.className = "grid-productos";
  coleccionSection.appendChild(gridProductosContainer);

  // F. MÓDULO DE CARRITO DENTRO DE CONTACTO / PEDIDOS
  const carritoBox = document.createElement("div");
  carritoBox.className = "carrito-caja";
  carritoBox.innerHTML = `
    <h3> Tu Carrito de Compras</h3>
    <div id="itemsCarrito">
      <p style="font-size:0.9rem; color: var(--suave); font-weight: 600;">Tu carrito está vacío. Agrega tus productos preferidos.</p>
    </div>
    <div class="carrito-total-box">
      Total: <span id="totalPagar">$0</span>
    </div>
  `;

  formulario.before(carritoBox);
  itemsCarritoContainer = document.getElementById("itemsCarrito");
  totalPagarSpan = document.getElementById("totalPagar");

  // Cargar catálogo completo al inicio
  renderizarCatalogo("todos");
}

// RENDERIZAR PRODUCTOS SEGÚN EL MÓDULO SELECCIONADO
function renderizarCatalogo(moduloFiltro) {
  gridProductosContainer.innerHTML = "";
  const filtrados = moduloFiltro === "todos" 
    ? productosBD 
    : productosBD.filter(p => p.modulo === moduloFiltro);

  filtrados.forEach(prod => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-producto";
    tarjeta.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h4>${prod.nombre}</h4>
      <p class="precio">$${prod.precio.toLocaleString('es-CO')}</p>
      <button class="btn-cart"> Agregar al Carrito</button>
    `;

    tarjeta.querySelector(".btn-cart").addEventListener("click", () => {
      agregarAlCarrito(prod);
    });

    gridProductosContainer.appendChild(tarjeta);
  });
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarritoDOM();
}

function actualizarCarritoDOM() {
  itemsCarritoContainer.innerHTML = "";
  if (carrito.length === 0) {
    itemsCarritoContainer.innerHTML = `<p style="font-size:0.9rem; color: var(--suave); font-weight: 600;">Tu carrito está vacío. Agrega tus productos preferidos.</p>`;
    totalPagarSpan.textContent = "$0";
    return;
  }

  let total = 0;
  carrito.forEach((item) => {
    total += item.precio;
    const fila = document.createElement("div");
    fila.className = "item-cart-fila";
    fila.innerHTML = `
      <span>${item.nombre}</span>
      <strong>$${item.precio.toLocaleString('es-CO')}</strong>
    `;
    itemsCarritoContainer.appendChild(fila);
  });

  totalPagarSpan.textContent = `$${total.toLocaleString('es-CO')}`;
}

// Misión 16
function cargarPreferenciaTema() {
  const temaGuardado = localStorage.getItem("modoNoche");
  if (temaGuardado === "true") {
    document.body.classList.add("noche");
    btnTema.textContent = "Modo claro";
  } else {
    document.body.classList.remove("noche");
    btnTema.textContent = "Modo oscuro";
  }
}

/* ===========================================================
4. EVENTOS
=========================================================== */
// Misión 5
btnDestacar.addEventListener("click", () => {
  if (caja) caja.classList.toggle("destacada");
});

// Misión 6
btnOcultar.addEventListener("click", () => {
  if (caja) {
    caja.classList.toggle("oculto");
    if (caja.classList.contains("oculto")) {
      btnOcultar.textContent = "Mostrar";
    } else {
      btnOcultar.textContent = "Ocultar / mostrar";
    }
  }
});

// Misión 7
btnColor.addEventListener("click", () => {
  if (caja) {
    posicionColor = (posicionColor + 1) % coloresCaja.length;
    caja.style.backgroundColor = coloresCaja[posicionColor];
  }
});

// Misión 9
btnAgregar.addEventListener("click", () => {
  const texto = campoProyecto.value.trim();
  if (texto === "") return;

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = texto;
  lista.append(nuevoLi);

  campoProyecto.value = "";
  campoProyecto.focus();
  actualizarContador();
});

// Misión 10
btnQuitar.addEventListener("click", () => {
  const ultimoLi = lista.lastElementChild;
  if (ultimoLi !== null) {
    ultimoLi.remove();
    actualizarContador();
  }
});

// Misión 11
btnVaciar.addEventListener("click", () => {
  lista.innerHTML = "";
  actualizarContador();
});

// Misión 12
filasTabla.forEach((fila) => {
  fila.addEventListener("click", () => {
    filasTabla.forEach((f) => f.classList.remove("fila-marcada"));
    fila.classList.add("fila-marcada");
  });
});

// Misión 13
campoMensaje.addEventListener("input", () => {
  const cantidad = campoMensaje.value.length;
  contadorLetras.textContent = `${cantidad} caracteres`;
});

// Misión 14
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombreVal = campoNombre.value.trim();
  const mensajeVal = campoMensaje.value.trim();

  avisoForm.className = "aviso";

  if (nombreVal === "" || mensajeVal === "") {
    avisoForm.classList.add("error");
    avisoForm.textContent = "Error: Escribe tu nombre y detalles del pedido.";
  } else if (carrito.length === 0) {
    avisoForm.classList.add("error");
    avisoForm.textContent = "Error: El carrito está vacío. Elige al menos un producto.";
  } else {
    avisoForm.classList.add("ok");
    avisoForm.textContent = "¡Pedido realizado con éxito! Gracias por tu compra en Glam & Pastel.";
    campoNombre.value = "";
    campoMensaje.value = "";
    contadorLetras.textContent = "0 caracteres";
    carrito = [];
    actualizarCarritoDOM();
  }
});

// Misiones 15 y 16
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("noche");
  const esNoche = document.body.classList.contains("noche");

  if (esNoche) {
    btnTema.textContent = "Modo claro";
  } else {
    btnTema.textContent = "Modo oscuro";
  }

  localStorage.setItem("modoNoche", esNoche);
});

/* ===========================================================
5. ARRANQUE (Apenas carga la página)
=========================================================== */
// Misión 1: Año dinámico
const anioActual = new Date().getFullYear();
spanAnio.textContent = anioActual;

// Misión 2: Reemplazar textos iniciales por los de la tienda
titulo.textContent = "Glam & Pastel";
subtitulo.textContent = `Boutique de Vanidades — Cartagena — ${anioActual}`;

if (parrafoInicio) {
  parrafoInicio.textContent = "Tienda de variedades femenina en la ciudad de Cartagena. Manejamos domicilios locales y envíos a todo el país con las últimas tendencias en pijamas, perfumes, maquillaje, calzado y bolsos.";
}

// Adaptar placeholders
campoNombre.placeholder = "Escribe tu nombre completo";
campoMensaje.placeholder = "Medio de pago (Nequi, Daviplata, Tarjeta), dirección y detalles...";

// Misión 3: Modificar enlace externo
enlaceExterno.setAttribute("href", "https://www.instagram.com");
enlaceExterno.setAttribute("target", "_blank");
enlaceExterno.setAttribute("rel", "noopener");
enlaceExterno.setAttribute("title", "Visitar tendencias externas");
enlaceExterno.textContent = "Explorar Tendencias Globales";



// Misión 4: Ejecutar contador inicial
actualizarContador();

// Misión 8: Pintar filas alternas
filasTabla.forEach((fila, indice) => {
  if (indice % 2 !== 0) {
    fila.style.backgroundColor = "var(--papel)";
  }
});

// CONSTRUIR TIENDA E-COMMERCE CON DOM
construirInterfazTiendaDOM();

// Misión 16: Cargar Tema
cargarPreferenciaTema();