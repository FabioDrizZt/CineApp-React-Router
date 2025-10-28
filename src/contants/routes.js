export const ROUTES = {
    HOME: '/',
    ABOUT: '/acerca',
    MOVIES: '/peliculas',
    SERIES: '/series',
    MOVIE_DETAIL: '/peliculas/:lang/:id',
    SERIES_DETAIL: '/series/:id',
}

export const createMovieDetailLink = (id) => {
    return `/peliculas/es-ES/${id}`
}

export const createSeriesDetailLink = (id) => {
    return `/series/${id}`
}