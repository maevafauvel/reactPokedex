import "./PokemonCard.css";
import PropTypes from "prop-types";

function PokemonCard(props) {
    
    return <figure className="card">
        {props.pokemon.imgSrc ? (
            < img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="cardImg"/>
        ) : (
            <p className="cardParagraph">???</p>
        )}
        <figcaption className="cardCaption">{props.pokemon.name}</figcaption>
    </figure>;
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;