import { useEffect } from "react";
import { useState } from "react";
import { /* useNavigate, */ useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  }
};

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { id, lang } = useParams();
  /* const navigate = useNavigate(); */

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=${lang}`, options)
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        document.title = json.title
      })
      .catch(err => console.error(err));
  }, [id, lang])

/*   const handleFavs = () => {
    console.log('Agregar a favoritos');
    // Agrega a localStorage el id del título
    navigate('/favorites') // esto reemplaza a window.location.href
  } */

  return (
    <div className="detail-content">
      {/* <button onClick={handleFavs}>Agregar a favoritos</button> */}
      <div className="detail-poster">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          onError={(e) => {
            e.target.src = '/no-image.svg';
          }}
        />
      </div>

      <div className="detail-info">
        <h1 className="detail-title">{movie.title}</h1>

        <div className="detail-meta">
          <span className="detail-rating">
            ⭐ {movie.vote_average?.toFixed(1)}/10
          </span>
          <span className="detail-year">
            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
          </span>
          <span className="detail-duration">
            {movie.runtime ? `${movie.runtime} min` : 'N/A'}
          </span>
        </div>

        <div className="detail-genres">
          {movie.genres && movie.genres.map(genre => (
            <span key={genre.id} className="genre-tag">
              {genre.name}
            </span>
          ))}
        </div>

        <div className="detail-overview">
          <h3>Sinopsis</h3>
          <p>{movie.overview || 'Sin descripción disponible.'}</p>
        </div>

        <div className="detail-additional">
          {movie.production_companies && movie.production_companies.length > 0 && (
            <div className="detail-section">
              <h4>Productoras:</h4>
              <p>{movie.production_companies.map(company => company.name).join(', ')}</p>
            </div>
          )}

          {movie.production_countries && movie.production_countries.length > 0 && (
            <div className="detail-section">
              <h4>País:</h4>
              <p>{movie.production_countries.map(country => country.name).join(', ')}</p>
            </div>
          )}

          {movie.budget && movie.budget > 0 && (
            <div className="detail-section">
              <h4>Presupuesto:</h4>
              <p>${movie.budget.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>)
}
