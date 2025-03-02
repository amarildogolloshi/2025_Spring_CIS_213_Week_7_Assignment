
import { useState } from 'react';
import React, { forwardRef } from 'react';
import './ReviewForm.css'
import StarRating from './StarRating';

const ReviewForm = ({addReview, ref, containerHeight}) => {
    
    const formDefaultData = {
        username: '',
        review: '',
        rating: null
    }
    const [formData, setFormData] = useState(formDefaultData);
    const [rating, setRating] = useState(formDefaultData.rating);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const {name, value} =  event.target

        // setFormData( prevState => ({
        //     ...prevState,
        //     [name]: value
        // }));

        setFormData((prevState) => ({
        ...prevState,
        [name]: name === 'rating' ? Number(value) : value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.username || !formData.review || !formData.rating ){
            return;
        }

        addReview(formData);
        setFormData(formDefaultData);
        setRating(null);
        setSubmitted(true);

        // Refresh the component by toggling the submitted state
        setTimeout(() => {
            setSubmitted(false);
        }, 0);
        console.log(rating)
    }
    return (
        <div className="movie-review-form">
        <form onSubmit={handleSubmit} style={{height:containerHeight}}>
            <fieldset ref={ref}>
                <legend>Add a Review:</legend>
                <div className="input-group">
                    <label htmlFor="username">User name:</label>
                    <input  type="text" id="username"
                            name="username" 
                            value={formData.username}  
                            onChange={handleChange}/> 
                </div>
                <div className="input-group">
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" name="review"
                        value = {formData.review}
                        onChange={handleChange}
                        rows = {5}
                    ></textarea>
                </div>
                <div className="input-group">
                    <label htmlFor="rating">Rating:</label>
                    <StarRating rating={rating} handleChange={handleChange} setRating={setRating}/>
                </div>
                <div className='input-group'>
                    <input type="submit" value="Submit" />
                </div>
            </fieldset>
        </form>
        </div>
    )
}

export default ReviewForm;