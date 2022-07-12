import { useState } from "react";

export default function MovieForm() {
    const [recipientName, setRecipientName] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [selectedMovieName, setMovieName] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");

    function handleSubmit() {
        console.log("Submitted!");
    }

    return (
        <div>
            <form onSumbit={handleSubmit}>
                <label htmlFor="theirName">Their Name</label>
                <input 
                    name="theirName"
                    type="text"
                    value={recipientName}
                    onChange={(event)=> setRecipientName(event.target.value)}
                    />
            </form>
        </div>
    );
}