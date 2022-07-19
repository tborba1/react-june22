import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

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
            <h3>{props.year}</h3>
            <DetailsButton>
                <button onClick={() => setIsModalOpen(true)}>Details</button>
            </DetailsButton>
            <ReactModal isOpen={isModalOpen}>
                    <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
            </ReactModal>
        </div>
    );
}