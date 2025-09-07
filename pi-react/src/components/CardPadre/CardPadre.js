import React, {Component} from "react";
import { Link } from 'react-router-dom';

function CardPadre (props){
    return(
        <section className="cardPadre">
            {listaARecorrer.map((character) => <Card
                key={character.id}
                image={character.img}
                name={character.name}
                description={character.description}
                extra={character.extra}
                id={character.id}
                rick={props.rick}
            />
            )}
        </section>
    )

}


export default CardPadre