import { useState } from "react";

export default function MovieForm(props) {
    const [searchCriteria, setSearchCriteria] = useState("");

    function handleSubmit(event) {
        // event.preventDefault();
        // console.log('movieCriteria:', selectedMovieName);
        console.log("Submitted!");
    }

    return (
        <div>
            <form onSumbit={handleSubmit}>
                <label htmlFor="movieCriteria">Enter Movie Criteria</label>
                <input 
                    name="movieCriteria"
                    type="text"
                    value={props.searchCriteria}
                    onChange={(event)=> props.setSearchCriteria(event.target.value)}
                    />
            </form>
        </div>
    );
}