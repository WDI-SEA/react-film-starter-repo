import React, { useState } from 'react';
import TMDB from "./TMDB.js";
import FilmRow from "./FilmRow.js";

const FilmListing = (props) => {
    const [filter, setFilter] = useState("all");
    const [faves, setFaves] = useState([]);
    const onFaveToggle = (film) => {
        if (faves && faves.includes(film)){
            let newFaves = [...faves];
            newFaves.splice(faves.indexOf(film), 1);
            setFaves(newFaves);
        } else {
            setFaves([...faves, film]);
        }
        console.log("Faves", faves);
    }
    let filmsToDisplay = (filter === "faves" ? faves : props.filmsData);
    const allFilmRows = filmsToDisplay.map((film, i) => {
        let isFave = (faves && faves.includes(film)) ? true : false;
        return (
            <FilmRow 
                onFaveToggle={onFaveToggle} 
                handleDetailsClick={props.handleDetailsClick}
                film={film} 
                isFave={isFave} 
                key={`filmRow-${i}`}
            />
        )
    })
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div 
                    className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    ALL
                    <span className="section-count">{props.filmsData.length}</span>
                </div>
                <div 
                    className={`film-list-filter ${filter === "faves" ? "is-active": ""}`}
                    onClick={() => setFilter("faves")}
                >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilmRows}
        </div>
    );
}

export default FilmListing;