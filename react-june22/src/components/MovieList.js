import { useState } from "react";

export default function MovieList() {
    const [timespan, setTimespan] = useState("This Month");
    const [bgColor, setBg] = useState("yellow"); //destructuring; pass something into useState to set the initial value

    return (
        <div>
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
            <br></br>
            <div style={{backgroundColor: bgColor}}>MovieList BgColorChange</div>
            <button onClick={()=> setBg("yellow")}>Yellow</button>
            <button onClick={()=> setBg("purple")}>Purple</button>
        </div>
    )
}