import FilmRow from './FilmRow';
import { useState } from 'react';

export default function FilmList(props) {

  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  const filmsToDisplay = filter === "all" ? props.films : faves;

    const handleFaveToggle = film => {
      console.log('fave this film:', film)
      let newFaves = [...faves];
      const filmIndex = newFaves.indexOf(film)
      if (filmIndex < 0) {
        // add to faves
        console.log(`Adding ${film.title} to faves`)
        newFaves = [...newFaves, film];
      } else {
        // remove from faves
        console.log(`Removing ${film.title} from faves`)
        newFaves.splice(filmIndex, 1)
      }
      setFaves(newFaves)
    }

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow 
            film={film} 
            key={`film-${i}`}
            handleFaveToggle={handleFaveToggle}
            handleDetailsClick={ () => {props.handleDetailsClick(props.film)}}
            isFave={faves.includes(film)}
            />
        )
    })

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => setFilter("all")}>
                ALL
                <span className="section-count">{props.films.length}</span>
              </div>
              <div className={`film-list-filter ${filter === 'fave' ? 'is-active' : ''}`} onClick={()=>
                setFilter("fave")}>
                FAVES
                <span className="section-count">{faves.length}</span>
              </div>
          </div>
          
          {allFilms}
        </div>
      )
}