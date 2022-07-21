import { useState } from "react";

export default function MovieForm(props) {
    const [searchCriteria, setSearchCriteria] = useState("");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchCriteria);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="movieCriteria">Find a movie:</label>
                <input 
                    value={props.searchCriteria}
                    onChange={(e)=> props.setSearchCriteria(e.target.value)}
                    />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}