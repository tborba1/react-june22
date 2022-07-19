import { useState, useEffect } from "react";
import styled from "styled-components";
import MovieModal from "./MovieModal";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const MoviePoster = styled.img`
    width: auto;
    height: 200px;
`;

const DetailsButton = styled.div`
    
`;

export default function MovieCard(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="MovieCard">
            <MoviePoster src={props.poster} />
            <h2 style={{ fontStyle: "italic"}}>{props.title}</h2>
            <h3 style={{ marginTop: "0px" }}>{props.year}</h3>
            <DetailsButton>
                <button onClick={() => setIsModalOpen(true)}>Details</button>
            </DetailsButton>
            <MovieModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} test={props}>
                {/* <MoviePoster src={props.poster} />
                <h2 style={{ fontStyle: "italic"}}>{props.title}</h2>
                <h3 style={{ marginTop: "0px" }}>{props.year}</h3>
                <p>{props.movieId}</p> */}
                {/* <button onClick={() => setIsModalOpen(false)}>CLOSE</button> */}
            </MovieModal>
        </div>
    );
}