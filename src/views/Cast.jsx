import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as getMoviesApi from "../services/getMovies-api";


const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams('')

    useEffect(() => {
        getMoviesApi.getGetMovieCastById(movieId).then(setCast);
    }, [movieId])

    const url = "https://image.tmdb.org/t/p/w200"

    return (
        <>
            {cast && <ul>
                {cast.map(i => <li key={i.cast_id}>
                    {i.profile_path
                        ? <img src={`${url}${i.profile_path}`} alt={i.name} width="80px" />  
                        : <h4>No image</h4>}
                    <p>{i.name}</p>
                    <p>Character: {i.character}</p>
                    </li> )}
            </ul>}
        </>
    );
}

export default Cast;