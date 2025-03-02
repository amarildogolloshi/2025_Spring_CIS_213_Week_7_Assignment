import { FaStar } from 'react-icons/fa'
import "./MovieCard.css"
const MovieCard = ({movie}) =>{
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w500";
    return (
        
        <div className="movie">
            <div className="poster">
                <img src={`${baseUrl}${size}${movie.poster_path}`} alt={movie.original_title} />
            </div>
            <div className="vote-average-release-date-title">
                <div className="vote-average-release-date">
                    <p className="vote-average"> <FaStar  className="star"/>{movie.vote_average}</p>
                    <p>{movie.release_date}</p>
                </div>
                <div className="title">
                    <p>{movie.title}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;