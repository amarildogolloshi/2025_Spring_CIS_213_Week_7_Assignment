
import './MovieDetails.css'

const MovieDetails = ({id, title, year, synopsis, imgSrc, rating, categories}) => {
    return (
        <div className="movie-card-details">
            <h2>{title} -  {year}</h2>
            <div className="movie-img-details">
                <img src={imgSrc} alt={title} />
                <div className="movie-details">
                    <div className="movie-detail">
                        {synopsis}
                    </div>
                    <div className="movie-detail">
                        <h3>Rating: {rating}</h3>
                    </div>
                    <div className="movie-detail">
                        <h3>Categories:</h3>
                        <ul>
                            {
                                categories.map( (category, i) => (
                                    <li key={i}>{category}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;