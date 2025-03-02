
import "./MovieReviews.css"
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { useEffect, useRef, useState } from "react";


const MovieReviews = ({reviews, addReview}) => {

    const reviewListRef = useRef(null);
    const reviewFormRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('auto');

     useEffect(() => {
        
        if (reviewListRef.current && reviewFormRef.current) {
           
            const reviewListHeight = reviewListRef.current.clientHeight;
            const reviewFormHeight = reviewFormRef.current.clientHeight;
            setContainerHeight(reviewFormHeight - 16)
        }
  }, [reviewListRef, reviewFormRef]); 
  
    return (
        <div className="movie-reviews" >
            <ReviewList reviews={reviews} ref={reviewListRef} containerHeight={containerHeight} />
            <ReviewForm addReview ={addReview} ref={reviewFormRef} containerHeight={containerHeight}/>
        </div>
    )
}

export default MovieReviews;