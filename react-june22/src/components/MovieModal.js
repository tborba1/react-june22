import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const MoviePoster = styled.img`
    width: auto;
    height: 200px;
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
            setMovies(data.Search);
            setIsLoading(false);
          }
        getMovies();  
    }, [props.details.movieId]);

    return (
        <ReactModal isOpen={props.isOpen}>
            <MoviePoster src={props.details.poster} />
            <h2 style={{ fontStyle: "italic"}}>{props.details.title}</h2>
            <h3 style={{ marginTop: "0px" }}>{props.details.year}</h3>
            <p>{props.details.movieId}</p>
            <button onClick={() => props.setIsModalOpen(false)}>CLOSE</button>
        </ReactModal>
    );
}