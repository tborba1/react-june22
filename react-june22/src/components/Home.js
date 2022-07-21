import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import MovieList from "./MovieList";

const HeaderText = styled.h1`
    background-color: lightgreen; 
    margin: 32px;
    border-radius: 10px;
`;

export default function Home() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <div>the theme is {theme}</div>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
            <HeaderText className="HeaderText">Movie App</HeaderText>
            <div><MovieList /></div>
        </div>
    );
}