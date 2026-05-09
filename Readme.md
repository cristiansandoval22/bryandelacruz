````md
# 🚀 Bryan UGC Portfolio Website

Sitio web profesional desarrollado para mostrar portafolio UGC (User Generated Content), marcas colaboradoras, servicios y contacto.  
Construido con enfoque en **alto rendimiento**, **SEO**, **escalabilidad** y administración de contenido mediante CMS headless.

---

# 📌 Tecnologías utilizadas

## Frontend

- [Astro](https://astro.build/)
- TypeScript
- CSS personalizado (arquitectura escalable)
- JavaScript modular

## CMS / Backend

- [Sanity CMS](https://www.sanity.io)

## Deploy / Hosting

- [Vercel](https://vercel.com)

## Librerías adicionales

- [GLightbox](https://biati-digital.github.io/glightbox) (modal para videos)

---

# 🎯 Objetivo del proyecto

Crear una landing page moderna y rápida para creador UGC donde las marcas puedan:

- Ver trabajos anteriores
- Conocer servicios disponibles
- Ver marcas colaboradoras
- Contactar rápidamente
- Navegar desde móvil y desktop

---

# 🧩 Secciones implementadas

## Hero Section

- Título editable desde Sanity
- CTA dinámico
- Imagen principal
- Badge personalizado
- Open Graph dinámico

## About Section

- Texto editable
- Palabras resaltadas dinámicas
- Imagen profesional
- Estadísticas

## Services Section

- Servicios administrables desde CMS
- Íconos personalizados
- Imagen lateral
- Activación / desactivación desde panel

## Portfolio Section

- Videos reales de trabajos UGC
- Filtros por categorías
- Modal con reproducción
- Soporte YouTube / Shorts
- Botón "Ver más"
- Responsive grid
- Cache optimizado

## Brands Section

- Logos de marcas colaboradoras
- Activación dinámica
- Preparado para carrusel infinito

## Contact Section

- CTA WhatsApp
- Redes sociales
- Datos configurables

---

# ⚡ Características técnicas

## Performance

- Carga rápida gracias a Astro Islands
- HTML estático optimizado
- Lazy loading de imágenes
- Caché SSR en Vercel

## SEO

- Meta title dinámico
- Meta description
- Open Graph Image
- Favicon dinámico
- URLs limpias

## UX/UI

- Diseño responsive mobile first
- Navegación clara
- Botones visibles
- Interacciones suaves
- Hover premium

---

# 📂 Estructura del proyecto

```bash
src/
│
├── components/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── Brands/
│   │   └── Contact/
│
├── lib/
│   ├── sanity.ts
│   ├── queries.ts
│
├── models/
│   └── sanity.ts
│
├── layouts/
│
└── pages/
````

---

# 🧠 Buenas prácticas implementadas

* Tipado fuerte con TypeScript
* Componentes reutilizables
* Queries separadas
* CSS modular por sección
* Código limpio y mantenible
* Mobile First real
* Separación lógica de responsabilidades

---

# 🔌 Integración Sanity

Toda la web es editable desde panel:

* Textos
* Botones
* Imágenes
* Videos
* Marcas
* Servicios
* SEO

---

# 🚀 Instalación local

```bash
git clone <repo-url>
cd proyecto
npm install
npm run dev
```

---

# 🌎 Deploy

Conectado automáticamente con:

[Vercel](https://vercel.com?utm_source=chatgpt.com)

Cada push a `main` genera deploy automático.

---

# 🔐 Futuras mejoras planeadas

* Cloudflare CDN + Firewall
* Analytics avanzado
* Formulario con validación
* Blog UGC
* Testimonials
* Multi idioma
* Dashboard privado
* Animaciones premium

---

# 👨‍💻 Autor

Desarrollado por Bryan
Marca personal: **Código Creativo**

---

# 📞 Contacto

WhatsApp / Redes / Email configurables desde Sanity.

---

# 📄 Licencia

Proyecto privado / uso personal profesional.

```
```
