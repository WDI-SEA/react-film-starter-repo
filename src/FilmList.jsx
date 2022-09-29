import { useState } from 'react';
import FilmRow from './FilmRow';

export default function FilmList(props){
    const [faves, setFaves] = useState([])

    const [filter, setFilter] = useState('all')

    const handleFilterClick = filter => {
      setFilter(filter)  
    }

    const handleFaveToggle = film => {
      let newFaves = [...faves];
      const filmIndex = newFaves.indexOf(film);
      if (filmIndex < 0) {
        // if film does not show in faves array then add film to the array, we made a newFave array so we can add or delete from it

        console.log(`ADDING ${film.title} TO FAVES`)
        newFaves = [...newFaves, film];
      } else {
        console.log(`REMOVING ${film.title} TO FAVES`)
        // .splice(where to start splicing, how many to splice)
        newFaves.splice(filmIndex, 1)
      }
      // now setFaves (fave) to the newFaves array we modified
      setFaves(newFaves)
    }

    const filmsToDisplay = filter=== "all" ? props.films : faves;

    const allFilms = filmsToDisplay.map((film, i)=> {
      return(
                <FilmRow 
                film={film}
                key={`filmRow-${i}`}
                poster_url={film.poster_path}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}/>
            )})
    

    // const allFilms = filmsToDisplay.map((film, i) => { .... })
        return(
            <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {
                handleFilterClick('all')
                }}>
                ALL
                <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
                handleFilterClick('faves')
                }}>
                FAVES
                <span className="section-count">{faves.length}</span>
              </div>
            </div>
    
    {allFilms}
  </div>
        )
    }