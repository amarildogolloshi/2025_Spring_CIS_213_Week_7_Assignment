import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "./Movies.css"

const Movies = () => {
    const API_KEY =  import.meta.env.VITE_TMDB_API_KEY;
    const [movies,setMovies] = useState([])
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
            const data = await response.json();
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect( () => {
        fetchData();
    }, [])
    
    return (
        <div className="movies">
            {
                movies.map( movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ) )
            }
        </div>
        
    )
}

export default Movies;