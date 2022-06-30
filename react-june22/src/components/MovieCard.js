export default function MovieCard(props) {
    
    return (
        <div className="MovieCard">
            <h2 style={{ fontStyle: "italic"}}>{props.title}</h2>
            <h3>{props.year}</h3>
            <h4>{props.rating}</h4>
        </div>
    );
}