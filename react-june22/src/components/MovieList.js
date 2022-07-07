import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const [timespan, setTimespan] = useState("This Month");
    // const [bgColor, setBg] = useState("yellow");
    const [movies, setMovies] = useState([
        {
            Title: "Eat Pray Love",
            Year: "2010",
            Rated: "PG-13",
        },
        {
            Title: "Notting Hill",
            Year: "1999",
            Rated: "PG-13",
        },
        {
            Title: "Ocean's Eleven",
            Year: "2001",
            Rated: "PG-13",
        },
    ]);

    return (
        <div>
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
            {/* <div style={{backgroundColor: bgColor}}>MovieList BgColorChange</div>
            <button onClick={()=> setBg("yellow")}>Yellow</button>
            <button onClick={()=> setBg("purple")}>Purple</button> */}
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div style={{ display: "flex" }}>
                        <MovieCard 
                        title={movie.Title} 
                        year={movie.Year} 
                        rating={movie.Rated}/>
                    </div>
                ))
            ): (
                <div>No results found.</div>
            )}
            
        </div>
    );
}