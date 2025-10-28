import { useState, useEffect } from "react";
import Card from "../components/Card";

const url = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  }
};

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <section className="cards-grid">
      {movies.map(movie =>
        <Card item={movie} key={movie.id} />
      )
      }
    </section>
  )
}
