import { useState, useEffect } from "react";
import styled from "styled-components";
import MovieList from "./MovieList";
import ReactModal from "react-modal";

const HeaderText = styled.h1`
    background-color: lightgreen; 
    margin: 32px;
    border-radius: 10px;
`;

export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <HeaderText className="HeaderText">Movie App</HeaderText>
            <button onClick={() => setIsModalOpen(true)}>OPEN</button>
            <div><MovieList /></div>
            <div><ReactModal isOpen={isModalOpen}>
                    <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
                </ReactModal></div>
        </div>
    );
}