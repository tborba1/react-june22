import { useState } from "react";

export default function MovieForm() {
    const [selectedMovieName, setMovieName] = useState("");

    function handleSubmit() {
        console.log("Submitted!");
    }

    return (
        <div>
            <form onSumbit={handleSubmit}>
                <label htmlFor="movieCriteria">Enter Movie Criteria</label>
                <input 
                    name="movieCriteria"
                    type="text"
                    value={selectedMovieName}
                    onChange={(event)=> setMovieName(event.target.value)}
                    />
            </form>
        </div>
    );
}