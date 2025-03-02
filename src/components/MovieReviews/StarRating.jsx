import { FaStar } from 'react-icons/fa'

import './StarRating.css'
import { useState } from 'react'

const StarRating = ({rating, clickable=true, handleChange=null, setRating=null}) => {
    const [hover, setHover] = useState(null);
    return (
        <div className='group-star'>
            {
                [...Array(5)].map( (star, i) => {
                    const ratingValue = i + 1;
                    
                    return(
                        <label key={i}>
                            {
                                clickable ? (
                                    <>
                                    <input  type="radio" name="rating" value={ratingValue} 
                                            onClick={  () => setRating(ratingValue) }
                                            onChange={ handleChange }
                                    />
                                    <FaStar  className="star"
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                            onMouseEnter={ () => setHover(ratingValue) }
                                            onMouseLeave={ () => setHover(null) } 
                                    />
                                    </>
                                    
                                ) : (
                                    <FaStar className="star"
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                          
                                    />
                                )
                            }
                            
                        </label>
                    )
                } )
            }
         
        </div>
    )
}

export default StarRating;