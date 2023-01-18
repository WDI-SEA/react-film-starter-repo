import { useState } from "react";
import Poster from "./Poster";
import Fave from "./Fave";


export default function FilmRow(props)  {

        return (
            <>
                <div className="film-row" onClick={() => props.handleDetailsClick(props.film)} >
                    <Poster film={props.film}/>
                    <div className="film-summary">
                        <h1>{props.film.title}</h1>
                        <p>{props.film.release_date.split("-", 1)}</p>
                        <Fave 
                        onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave}
                        />
                    </div>
                </div>
            </>
        )
}