import axios from 'axios'

export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    Headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

const api = axios.create({
    baseURL: TMBD_CONFIG.BASE_URL
})


export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `/search/keyword?query=${encodeURIComponent(query)}`
        : '/discover/movie?sort_by=popularity.desc';

    const response = await api.get(endpoint, {
        headers: TMBD_CONFIG.Headers
    })
    console.log(response.data.results)
    return response.data.results;
}