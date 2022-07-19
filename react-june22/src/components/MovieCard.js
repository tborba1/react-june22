import { useState, useEffect } from "react";
import styled from "styled-components";
import MovieModal from "./MovieModal";

const MoviePoster = styled.img`
    width: auto;
    height: 200px;
`;

export default function MovieCard(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="MovieCard">
            <MoviePoster src={props.poster} />
            <h2 style={{ fontStyle: "italic"}}>{props.title}</h2>
            <h3 style={{ marginTop: "0px" }}>{props.year}</h3>
            <button onClick={() => setIsModalOpen(true)}>Details</button>
            {!isModalOpen
            ? null
            : <MovieModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} details={props} />
            }
        </div>
    );
}