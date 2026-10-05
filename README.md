# 🎬 CineApp — Single Page Application con React Router

<p align="center">
  <img src="https://raw.githubusercontent.com/FabioDrizZt/CineApp-React-Router/main/public/vite.svg" width="80" alt="CineApp Logo" />
</p>

<p align="center">
  <strong>Aplicación web moderna de catálogo audiovisual desarrollada con React 19, Vite y React Router v7.</strong><br>
  Proyecto educativo de cátedra para la enseñanza de Single Page Applications (SPA), consumo de APIs REST y patrones profesionales de enrutamiento.
</p>

<p align="center">
  <a href="https://fabiodrizzt.github.io/CineApp-React-Router">
    <img src="https://img.shields.io/badge/Demo%20en%20Vivo-GitHub%20Pages-success?style=for-the-badge&logo=github" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/React_Router-v7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
</p>

---

## 🌐 Demo en Vivo

Puedes explorar la aplicación en funcionamiento desplegada en GitHub Pages:

👉 **[https://fabiodrizzt.github.io/CineApp-React-Router](https://fabiodrizzt.github.io/CineApp-React-Router)**

---

## 🎯 Propósito Pedagógico y Características

**CineApp** fue diseñada como material demostrativo para ilustrar cómo transformar una aplicación modular en una **Single Page Application (SPA)** de alto rendimiento, evitando recargas completas del navegador y preservando estados en memoria:

* 🧭 **Enrutamiento Centralizado:** Todas las rutas de la app se definen como constantes en `src/contants/routes.js`, eliminando cadenas de texto dispersas ("magic strings") y previniendo errores de tipeo.
* ⚡ **Navegación Declarativa:** Uso del componente `<Link>` para transiciones fluidas e instantáneas controladas por la History API del navegador.
* 🧩 **Rutas Anidadas (`<Outlet />`):** Composición jerárquica de vistas, permitiendo que rutas secundarias (como `/acerca`) se rendericen dentro del contexto de una página contenedora (`Home`).
* 🔍 **Rutas Parametrizadas y Reactivas (`useParams`):** Consumo de rutas dinámicas como `/peliculas/:lang/:id`, extrayendo los parámetros directamente para realizar consultas asíncronas a la API de **The Movie Database (TMDb)** dentro de `useEffect`.
* ⬅️ **Navegación Imperativa (`useNavigate`):** Capacidad de redirección programática tras eventos (p. ej., guardar en favoritos o regresar a la pantalla anterior con `navigate(-1)`).
* 🚫 **Ruta Comodín 404:** Manejo amigable de URLs inexistentes mediante `<Route path="*" ... />`.
* 📦 **Despliegue Robusto en GitHub Pages:** Configuración de `basename` dinámico y solución al problema de recarga de rutas en servidores estáticos mediante el truco de duplicación a `404.html`.

---

## 🛠️ Stack Tecnológico

| Herramienta | Versión | Rol en el Proyecto |
| :--- | :--- | :--- |
| **React** | `^19.1.1` | Biblioteca base para UI declarativa basada en componentes |
| **React Router DOM** | `^7.9.4` | Sistema integral de enrutamiento y gestión de historial |
| **Vite** | `^7.1.7` | Herramienta de compilación rápida y servidor de desarrollo HMR |
| **TMDb API v3** | REST API | Fuente de datos para películas populares, detalles, pósters y metadatos |
| **gh-pages** | `^6.3.0` | Automatización del despliegue a la rama `gh-pages` |

---

## 📁 Estructura del Proyecto

```text
CineApp-React-Router/
├── public/                     # Recursos públicos estáticos
│   └── no-image.svg            # Imagen fallback para tarjetas sin póster
├── src/
│   ├── assets/                 # Recursos gráficos importables
│   ├── components/             # Componentes reutilizables
│   │   ├── Card.jsx            # Tarjeta de película con póster y enlace dinámico
│   │   └── NavBar.jsx          # Barra de navegación con enlaces declarativos <Link>
│   ├── contants/               # Constantes del proyecto
│   │   └── routes.js           # Diccionario central ROUTES y generadores de URLs
│   ├── pages/                  # Vistas principales de la aplicación
│   │   ├── About.jsx           # Información de la plataforma y tecnologías
│   │   ├── Home.jsx            # Pantalla principal con banner hero y <Outlet />
│   │   ├── MovieDetail.jsx     # Detalle completo de película con useParams y TMDb
│   │   ├── Movies.jsx          # Grilla de películas populares
│   │   └── Series.jsx          # Catálogo de series de televisión
│   ├── App.jsx                 # Componente raíz: Router, Navbar, Routes y Footer
│   ├── index.css               # Sistema de diseño, grid responsiva y estilos oscuros
│   └── main.jsx                # Entrada principal de React con createRoot
├── .env.example                # Plantilla de variables de entorno requeridas
├── index.html                  # Plantilla HTML con metadatos y fuente Inter
├── package.json                # Dependencias, scripts y configuración de deploy
└── vite.config.js              # Configuración de base path y plugin de React
```

---

## 🛣️ Tabla de Rutas de la Aplicación

| Ruta | Constante (`ROUTES`) | Componente | Descripción |
| :--- | :--- | :--- | :--- |
| `/` | `ROUTES.HOME` | `<Home />` | Portada principal con banner de bienvenida. Aloja a `<About />` mediante `<Outlet />`. |
| `/acerca` | `ROUTES.ABOUT` | `<About />` | Sub-ruta anidada dentro de `Home` con la descripción del proyecto. |
| `/peliculas` | `ROUTES.MOVIES` | `<Movies />` | Catálogo en grilla con las películas populares del momento. |
| `/peliculas/:lang/:id` | `ROUTES.MOVIE_DETAIL` | `<MovieDetail />` | Ficha técnica con sinopsis, productoras, presupuesto y puntuación. |
| `/series` | `ROUTES.SERIES` | `<Series />` | Sección dedicada a series de televisión. |
| `/favorites` | `/favorites` | Vista en línea | Sección de películas guardadas como favoritas. |
| `*` | Ruta comodín | Vista en línea | Pantalla visual de error 404 para URLs no encontradas. |

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
* **Node.js** (versión 18 o superior recomendada)
* **npm** o gestor de paquetes equivalente

### 1. Clonar el repositorio
```bash
git clone https://github.com/FabioDrizZt/CineApp-React-Router.git
cd CineApp-React-Router
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```env
VITE_ACCESS_TOKEN=tu_token_de_lectura_de_la_api_de_tmdb
```

> [!NOTE]
> Puedes obtener una clave de API gratuita registrándote en [The Movie Database (TMDb)](https://www.themoviedb.org/).

### 4. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

---

## 📦 Scripts Disponibles

En la raíz del proyecto puedes ejecutar:

* `npm run dev`: Inicia el servidor de desarrollo local con recarga rápida (HMR).
* `npm run build`: Compila la aplicación para producción y duplica automáticamente `dist/index.html` como `dist/404.html` para compatibilidad SPA con GitHub Pages.
* `npm run preview`: Previsualiza localmente el paquete de producción generado en `dist/`.
* `npm run deploy`: Ejecuta el ciclo completo de empaquetado y publica el bundle a la rama `gh-pages`.
* `npm run lint`: Ejecuta ESLint sobre todo el código fuente.

---

## 🌐 Configuración Especial: Despliegue en GitHub Pages

Al desplegar una aplicación de una sola página en servidores estáticos como GitHub Pages, surgen dos retos habituales resueltos en esta plantilla:

### 1. Ruta base con `basename`
En `vite.config.js` y `App.jsx`, el enrutador reconoce el subdirectorio donde está alojada la app:
```jsx
// src/App.jsx
<Router basename={import.meta.env.BASE_URL}>
  ...
</Router>
```

### 2. Solución al error 404 al recargar rutas
GitHub Pages busca un archivo físico para cada ruta solicitada (por ejemplo `/peliculas`). Al no encontrarlo, devuelve por defecto un 404.  
Para solucionarlo, el script de compilación genera una copia de `index.html` con el nombre `404.html`:

```json
"build": "vite build && node -e \"require('fs').copyFileSync('dist/index.html', 'dist/404.html')\""
```
De este modo, ante cualquier URL que el usuario recargue o comparta, GitHub Pages sirve `404.html` (que es el mismo `index.html`), permitiendo que **React Router intercepte la URL y renderice la vista correcta sin interrupciones**.

---

## 📄 Créditos y Licencia

* **Cátedra:** Programación II — Universidad Católica de Santiago del Estero (UCSE).
* **Profesor:** Fabio Drizzt.
* **Datos y Pósters:** Información provista por [The Movie Database (TMDb)](https://www.themoviedb.org/). Este producto utiliza la API de TMDb pero no está certificado ni respaldado por TMDb.
