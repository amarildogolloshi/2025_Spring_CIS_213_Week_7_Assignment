import StarRating  from './StarRating'
import React, { forwardRef } from 'react';

import './ReviewList.css'

const ReviewList = ({reviews, ref, containerHeight}) => {
    return (
        <div className="movie-review-list"  >
            <fieldset ref={ref} style={{height:containerHeight}}>
            <legend>Reviews:</legend>
                {
                    reviews.map( (review, i) => (
                        <div key={i} className='movie-review-item'>
                            <h4>{review.user}</h4>
                            <p>{review.review}</p>
                            <StarRating rating={review.rating} clickable={false} />
                        </div>
                    ) )
                }
                
                
            </fieldset>
        </div>
    )
}

export default ReviewList;