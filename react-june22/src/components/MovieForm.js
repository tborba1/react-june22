import { useState } from "react";

export default function MovieForm() {
    const [selectedMovieName, setMovieName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log('movieCriteria:', selectedMovieName);
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}