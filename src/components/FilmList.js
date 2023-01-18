import FilmRow from "./FilmRow";
import { useState } from "react";

export default function FilmList(props) {
    const [filter, setFilter] = useState("all")
    const [faves, setFave] = useState([])

    function handleFilterClick(filter) {
        // console.log('filter was clicked', filter)
        setFilter (filter)
    }

    function handleFaveToggle(filmName) {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(filmName)
        // console.log(filmIndex, "film index", "film name", filmName.title)

        if(filmIndex < 0){
            setFave([...newFaves, filmName])
        } else {
            newFaves.splice(filmIndex, 1)
            setFave(newFaves)
        }
    }
        const filmsToDisplay = filter ==="all" ? props.films : faves;

        const allFilms = filmsToDisplay.map((film, idx) => {
            return <FilmRow 
            film={film} 
            key={`film${idx}`} 
            onFaveToggle={handleFaveToggle}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}
            />
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=> handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{handleFilterClick("faves")}}>
                        FAVES
                        <span className="section-count">{faves.length}</span>
                    </div>
                </div>
                <h2>{allFilms}</h2>
            </div>
        )
    }