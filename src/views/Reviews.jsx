import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as getMoviesApi from "../services/getMovies-api";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams('')

    useEffect(() => {
        getMoviesApi.getGetMovieReviewsById(movieId).then(setReviews);
    }, [movieId])

    return (
        <>
            {reviews.length > 0
                ? <ul>{reviews.map(review => <li key={review.id}>
                    <h4>Author: {review.author}</h4>
                    <p>{review.content}</p>
                </li>)}</ul>
                : <p>We don't have any reviwes for this movie.</p>
            }
        </>
    );
}

export default Reviews;