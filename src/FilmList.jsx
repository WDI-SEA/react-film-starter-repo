import { useState } from "react";
import FilmRow from "./FilmRow";


const FilmList = ({ film, handleDetailsClick }) => {

  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])
  const [isfave, setIsFave] = useState('false')
  


  const handleFilterClick = (filterName) => {
    setFilter(`${filterName}`, () => console.log(filter))
    console.log(filterName)
  }

  const handleFaveToggle = film => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex < 0) {
      console.log(`ADDING ${film.title} TO FAVES`)
      newFaves = [...newFaves, film];
    } else {
      console.log(`REMOVING ${film.title} TO FAVES`)
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  // if filter is all show films list otherwise shove faves tab
  const filmsToDisplay = filter=== "all" ? film : faves;

  const filmTitle = filmsToDisplay.map((fil, index) => {
    return (
      <FilmRow
        film={fil}
        key={`filmRow-${index}`}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(fil)}
        handleDetailsClick={handleDetailsClick}
      />
    )
  })
    
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
           className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
           onClick={() => setFilter('all')} >
             ALL
             <span className="section-count">{film.length}</span>
         </div>
         <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')} >
             FAVES
          <span className="section-count">{ faves.length}</span>
          </div>
      </div>

     {filmTitle}
 </div>
  )
}

export default FilmList