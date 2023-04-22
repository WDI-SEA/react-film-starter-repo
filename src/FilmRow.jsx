import { useState } from "react"
import Poster from "./Poster"
import Fave from "./Fave";

export default function FilmRow(props) {
    const [fave, setFave] = useState(false)

    const handleDetailsClick = () => {
        console.log(`fetching details for ${props.film}`)
    }

    const handleFaveClick = (e) => {
        e.stopPropagation()
        console.log("fave clicked")
        setFave(!fave)
    }

    return (
        <>
            <div className="film-row" onClick={handleDetailsClick}>
                <Poster poster={props.film.poster_path} title={props.film.title} key={props.film.title} />
                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.split('-')[0]}</p>
                </div>
                <Fave
                    film={props.film}
                    handleFaveClick={handleFaveClick}
                    fave={fave}
                />
            </div>
        </>
    )
}