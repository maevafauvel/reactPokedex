import "./PokemonCard.css";

function PokemonCard(props) {
    console.log(props);

    return <figure className="card">
        {props.pokemon.imgSrc ? (
            < img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="cardImg"/>
        ) : (
            <p className="cardParagraph">???</p>
        )}
        <figcaption className="cardCaption">{props.pokemon.name}</figcaption>
    </figure>;
}

export default PokemonCard;