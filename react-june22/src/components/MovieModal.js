import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const MoviePoster = styled.img`
    width: auto;
    height: 200px;
    margin-top: 20px;
`;

export default function MovieModal(props) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${props.details.movieId}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("data is:", data);
            setMovies(data);
            setIsLoading(false);
          }
        getMovies();  
    }, [props.details.movieId]);

    const handleClose = () => {
        props.setIsModalOpen(false);
        setMovies(null);
    }

    return (
        <ReactModal isOpen={props.isOpen} ariaHideApp={false} onRequestClose={() => props.setIsModalOpen(false)}>
            <button onClick={handleClose}>CLOSE</button>
            <br></br>
            <MoviePoster src={movies.Poster} />
            <h2 style={{ fontStyle: "italic"}}>{movies.Title}</h2>
            <h3 style={{ marginTop: "0px" }}>{movies.Year}</h3>
            <p>{movies.Plot}</p>
            <p>Actors: {movies.Actors}</p>
            <p>Director: {movies.Director}</p>
            <p>Rated: {movies.Rated}</p>
            <p>Runtime: {movies.Runtime}</p>
        </ReactModal>
    );
}