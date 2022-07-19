import styled from "styled-components";
import MovieList from "./MovieList";
// import MovieModal from "./MovieModal";

const HeaderText = styled.h1`
    background-color: lightgreen; 
    margin: 32px;
    border-radius: 10px;
`;

export default function Home() {
    return (
        <div>
            <HeaderText className="HeaderText">Movie App</HeaderText>
            <div><MovieList /></div>
                {/* <MovieModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    /> */}
        </div>
    );
}