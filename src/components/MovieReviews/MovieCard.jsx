import MovieDetails from "./MovieDetails";
import MovieReviews from "./MovieReviews";

import './MovieCard.css'
import { useState } from "react";

const MovieCard = ({store}) => {
    
    const calculateAverageRating = (reviews) => {
        const totalRating = reviews.reduce((sum, review) => sum + parseFloat(review.rating), 0);
        const averageRating = totalRating / reviews.length;
        return averageRating.toFixed(2);
    };
    
    const [reviews, setReviews] = useState(store.reviews);
    const [averageRating, setAverageRating] = useState(calculateAverageRating(store.reviews));
    

    const addReview = (review) => {
        const updatedReviews = [...reviews, review];
        const updatedAverageRating = calculateAverageRating(updatedReviews);
        setReviews(updatedReviews)
        setAverageRating(updatedAverageRating)
    }
    
    return (
        <div className="movie-card">
            <MovieDetails 
                id={store.id} 
                title={store.title} 
                year={store.year} 
                synopsis={store.synopsis}
                imgSrc = {store.imgSrc}
                rating = {averageRating}
                categories = {store.categories}
             />
            <MovieReviews reviews={reviews} addReview={addReview} />
        </div>
    )
}

export default MovieCard;