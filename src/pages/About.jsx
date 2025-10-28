export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>Acerca de CineApp</h1>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>¿Qué es CineApp?</h2>
          <p>
            CineApp es una aplicación web de ejemplo desarrollada con React y React Router
            que muestra información sobre películas y series populares. Utiliza la API de
            The Movie Database (TMDb) para obtener datos actualizados sobre el contenido
            audiovisual más popular.
          </p>
        </section>

        <section className="about-section">
          <h2>Características</h2>
          <ul>
            <li>📱 Navegación con React Router</li>
            <li>🎬 Catálogo de películas populares</li>
            <li>📺 Catálogo de series populares</li>
            <li>🔍 Información detallada de cada título</li>
            <li>⭐ Calificaciones y datos técnicos</li>
            <li>🎨 Diseño responsive y moderno</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tecnologías Utilizadas</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>React</h4>
              <p>Biblioteca para construir interfaces de usuario</p>
            </div>
            <div className="tech-item">
              <h4>React Router</h4>
              <p>Enrutamiento declarativo para aplicaciones React</p>
            </div>
            <div className="tech-item">
              <h4>Vite</h4>
              <p>Herramienta de construcción rápida para desarrollo</p>
            </div>
            <div className="tech-item">
              <h4>TMDb API</h4>
              <p>Base de datos de películas y series</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Propósito Educativo</h2>
          <p>
            Este proyecto fue creado con fines educativos para demostrar conceptos
            fundamentales de React Router, incluyendo:
          </p>
          <ul>
            <li>Configuración de rutas</li>
            <li>Navegación entre páginas</li>
            <li>Parámetros dinámicos en rutas</li>
            <li>Componente Link y NavLink</li>
            <li>Hook useParams</li>
            <li>Consumo de APIs externas</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Créditos</h2>
          <p>
            Los datos de películas y series son proporcionados por{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              The Movie Database (TMDb)
            </a>
          </p>
          <p className="disclaimer">
            Este producto utiliza la API de TMDb pero no está avalado ni certificado por TMDb.
          </p>
        </section>
      </div>
    </div>
  )
}
