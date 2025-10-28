import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import { ROUTES } from "./contants/routes";

export default function App() {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes >
          <Route path={ROUTES.HOME} element={<Home />}>
            <Route path={ROUTES.ABOUT} element={<About />} />
          </Route>
          <Route path={ROUTES.SERIES} element={<Series />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route path={ROUTES.MOVIE_DETAIL} element={<MovieDetail />} />
          <Route path="/favorites" element={
            <section className="no-results">
              <h1>Favoritos</h1>
              <p>Añade tus películas favoritas a continuación.</p>
            </section>
          } />
          <Route path="*" element={
            <section className="error-page">
              <h1>404</h1>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w-00zDGFh6VtxNsOtRMeflVFF6GQunbMrA&s" alt="404 image" />
              <p>La página que buscas no existe.</p>
            </section>
          } />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2025 CineApp - Proyecto educativo con React Router</p>
        <p>Datos proporcionados por The Movie Database (TMDb)</p>
      </footer>
    </Router>
  )
}
