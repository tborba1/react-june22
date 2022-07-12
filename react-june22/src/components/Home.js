import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const movieData = [
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
];

export default function Home() {
    return (
        <div>
            <h1 className="HeaderText">Julia Roberts Movies</h1>
            <h2 className="SubText" style={{ fontStyle: "italic", marginTop: 20 }}>Movie Details</h2>
            <div style={{ display: "flex" }}>
                <MovieCard 
                title={movieData[0].Title} 
                year={movieData[0].Year} 
                rating={movieData[0].Rated}/>

                <MovieCard 
                title={movieData[1].Title} 
                year={movieData[1].Year} 
                rating={movieData[1].Rated}/>
                
                <MovieCard 
                title={movieData[2].Title} 
                year={movieData[2].Year} 
                rating={movieData[2].Rated}/>
            </div>

            {/* <div><MovieList /></div> */}
        </div>
    );
}