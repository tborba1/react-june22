import { useState } from "react";

export default function MovieForm(props) {
    const [searchCriteria, setSearchCriteria] = useState("");
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(searchCriteria);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="movieCriteria">Enter Movie Criteria</label>
                <input 
                    name="movieCriteria"
                    type="text"
                    value={props.searchCriteria}
                    onChange={(event)=> props.setSearchCriteria(event.target.value)}
                    />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}