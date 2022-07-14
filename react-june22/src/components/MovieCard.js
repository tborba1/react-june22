import styled from "styled-components";

const MoviePoster = styled.img`
    width: auto;
    height: 200px;
`;

const DetailsButton = styled.div`
    
`;

export default function MovieCard(props) {
    
    return (
        <div className="MovieCard">
            <MoviePoster src={props.poster} />
            <h2 style={{ fontStyle: "italic"}}>{props.title}</h2>
            <h3>{props.year}</h3>
            <DetailsButton>
                <button onClick={() => null}>Details</button> 
            </DetailsButton>
        </div>
    );
}