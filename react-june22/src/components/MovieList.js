import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export default function MovieList() {
    const [timespan, setTimespan] = useState("This Month");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function getMovies(name) {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=thor`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("response is:", data);
            setMovies(data.Search);
            setIsLoading(false);
          }
        getMovies();  
    }, [API_KEY]); // Don't forget your dependency list! (An empty array is sufficient)

    return (
        <div>
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
            {!isLoading ? (
                <div>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div style={{ display: "flex" }}>
                                <MovieCard 
                                title={movie.Title} 
                                year={movie.Year}/>
                            </div>
                        ))
                    ): (
                        <div>No results found.</div>
                    )}
                    </div>
                    ): (
                        <div>Loading...</div>
                    )}
            
        </div>
    )};