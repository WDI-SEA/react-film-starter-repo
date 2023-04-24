import { useState } from "react"
import FilmRow from "./FilmRow";

export default function FilmList(props) {
    const [filter, setFilter] = useState("all")
    const [faves, setFaves] = useState([])
    const [isFave, setIsFave] = useState(false)

    const handleFilterClick = filter => {
        console.log("a filter was clicked: " + filter)
        setFilter(filter)
    }

    const handleFaveToggle = film => {
        console.log("accept a film object as an argument")
        const newFaves = faves.slice()
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0) {
            console.log(`${film.title} needs to be added from fave array`)
            newFaves.push(film)
        } else {
            console.log(`remove ${film.title} from fave array`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }
    const filmsToDisplay = filter === "all" ? props.films : faves;

    const filmRows = filmsToDisplay.map((film, i) => (
        <FilmRow key={`filmRow-${film.id}`} film={film}
            faves={faves}
            onFaveToggle={handleFaveToggle}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}
        />
    ));

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === "all" ? "is-active" : ""}`} onClick={() => handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === "faves" ? "is-active" : ""}`} onClick={() => handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {filmRows}
        </div>
    )
}