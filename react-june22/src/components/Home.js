import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import MovieList from "./MovieList";

const HeaderText = styled.h1`
    color: ${props => props.dark ? 'black' : 'white'}; 
    background-color: ${props => props.dark ? 'lightgreen' : 'purple'}; 
    margin: 32px;
    border-radius: 10px;
`;

const HomeDiv = styled.div`
    color: ${props => props.dark ? 'white' : 'black'}; 
    background-color: ${props => props.dark ? 'purple' : 'lightgreen'};
`;

export default function Home() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <HomeDiv dark={theme === 'dark'}>
            <div>The theme is: {theme}</div>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
            <HeaderText dark={theme === 'dark'} className="HeaderText">Movie App</HeaderText>
            <div><MovieList theme={theme} /></div>
        </HomeDiv>
    );
}