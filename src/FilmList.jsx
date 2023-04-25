import { useState } from "react";
import FilmRow from "./FilmRow";

export default function FilmList(props) {
    const [filter, setFilter] = useState('all');
    const [faves, setFaves] = useState([]);
    const { films, handleDetailsClick } = props;

    const handleFilterClick = filter => {
        console.log("a filter was clicked: " + filter)
        setFilter(filter)
    }

    const handleFaveToggle = film => {
        const newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1) {
            newFaves.push(film)
        } else {
            newFaves.splice(filmIndex, 1)
        }
        // regardless of how we modified newFaves we want to set it in state
        setFaves(newFaves)
    }
    
    const allFilms = props.films.map((film, i) => {
        return (
            <FilmRow 
            film={film}
            key={`filmrow ${i}`}
            onFaveToggle={() => handleFaveToggle(film)}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}
            />
            )
        })
        const faveFilms = faves.map((film, i) => (
            <FilmRow 
              film={film} 
              key={`filmRow-${i}`} 
              onFaveToggle={handleFaveToggle}
              isFave={true}
              handleDetailsClick={handleDetailsClick}
            />
          ))
        
    const filmsToDisplay = (filter === 'all') ? allFilms : faveFilms

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div 
              className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              ALL
            </div>
            <div 
              className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
              onClick={() => handleFilterClick('faves')}
            >
              FAVES
            </div>
          </div>
          {filmsToDisplay}
        </div>
      );
    }