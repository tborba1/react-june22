import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export default function MovieList() {
    // const [timespan, setTimespan] = useState("This Month");
    const [searchCriteria, setSearchCriteria] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {theme, toggleTheme} = useContext(ThemeContext);
    
    useEffect(() => {
        async function getMovies(name) {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchCriteria}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log("data is:", data);
            setMovies(data.Search);
            setIsLoading(false);
          }
        getMovies();  
    }, [searchCriteria]); // Don't forget your dependency list! (An empty array is sufficient)

    const CardContainer = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    `;

    const ListDiv = styled.h2`
        color: ${props => props.dark ? 'white' : 'black'}; 
        background-color: ${props => props.dark ? 'grey' : 'lightgrey'};
        font-style: italic;
        margin-top: 20px;
        margin-left: 32px;
        margin-right: 32px;
        border-radius: 10px;
`;

    return (
        <div>
            {/* <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div> */}

            <MovieForm searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/>

            <br></br>
            <button onClick={() => setSearchCriteria("Thor")}>Find Thor</button>
            <button onClick={() => setSearchCriteria("Batman")}>Find Batman</button>
            <button onClick={() => setSearchCriteria("Superman")}>Find Superman</button>
            <div>{searchCriteria} is selected.</div>
            <ListDiv dark={theme === 'dark'}>Movie List</ListDiv>
            {!isLoading ? (
                <CardContainer>
                    {movies?.length > 0 ? (
                        movies?.map((movie) => (
                            <div>
                                <MovieCard 
                                title={movie.Title} 
                                year={movie.Year}
                                poster={movie.Poster}
                                movieId={movie.imdbID}/>
                            </div>
                        ))
                    ): (
                        <div>No results found.</div>
                    )}
                    </CardContainer>
                    ): (
                        <div>Loading...</div>
                    )}
            
        </div>
    )};