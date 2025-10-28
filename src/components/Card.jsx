import { Link } from 'react-router-dom';
import { createMovieDetailLink } from '../contants/routes';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Card({ item }) {
  return (
    <div className="card">
      <Link to={createMovieDetailLink(item.id)} className="card-link">
        <div className="card-image">
          <img
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            alt={item.title}
            onError={(e) => {
              e.target.src = '/no-image.svg';
            }}
          />
          <div className="card-overlay">
            <span className="card-rating">
              ⭐ {item.vote_average?.toFixed(1) || 'N/A'}
            </span>
          </div>
        </div>

        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-date">
            {item.release_date ? new Date(item.release_date).getFullYear() : 'N/A'}
          </p>
          <p className="card-overview">
            {item.overview ?
              (item.overview.length > 100 ?
                item.overview.substring(0, 100) + '...' :
                item.overview
              ) :
              'Sin descripción disponible'
            }
          </p>
        </div>
      </Link>
    </div>
  )
}
