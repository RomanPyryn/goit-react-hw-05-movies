// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import * as getMoviesApi from "../services/getMovies-api";
import Searchbar from "../components/Searchbar/index";

const Movies = () => {
    // const [searchQuery, setSearchQuery] = useState('');
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     const fetchFunc = async (searchQuery) => {
    //         try {
    //             const results = await getMoviesApi.getMovieSearch(searchQuery)

    //             console.log(results.hits);
    //             console.log(results.hits);

    //             if (results.hits.length === 0) {toast.error('Write something else!');}
    //             setMovies(results.hits);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
        
    //     if (searchQuery !== '') {fetchFunc(searchQuery);}
    // }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formRequest = e.currentTarget.elements.serch.value;

        console.log(e.currentTarget);
        console.log(formRequest);

        // if (formRequest.trim() === '') {
        //     return toast.error('Write something!');
        // }

        // setSearchQuery(formRequest);
        // setMovies([]);
    };

    return (
        <div>
            <Searchbar onSubmitFom={handleSubmit}/>
            {/* <ToastContainer/> */}
        </div>
    );
}

export default Movies;