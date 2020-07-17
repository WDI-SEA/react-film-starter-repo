import React, {useState} from 'react';
import FilmRow from './FilmRow';



const FilmListing = (props) => {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([]);

    let handleFilterClick = (filter) => {
        setFilter(filter)
        console.log('setting filter to')
    }

    let handleFaveToggle = (film) => {
      console.log("handling toggle")
      let faveList = [...faves]
      const filmIndex = faveList.indexOf(film);
      if (filmIndex < 0) {
        faveList = [...faveList, film];
      } else {
        faveList.splice(filmIndex, 1)
      }
      setFaves(faveList)
      console.log(faves)
    }


        const allFilms = props.films.map((film, i) =>{
          return (
            <FilmRow film={film} key={`FilmRow-${i}`} onFaveToggle={handleFaveToggle} isFave={faves.includes(film)} />
          )
        })

        return (
            <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              <div classname="film-list-filters">
                  <div className={`film-list-filter ${filter === 'all'? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
                      ALL
                      <span className="section-count">{props.films.length}</span>
                  </div>
              <div className={`film-list-filter ${filter === 'faves'? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
                Faves
                <span className="section-count">{faves.length}</span>
                </div>     
            </div>
              {allFilms}
            </div>
        );
      
}

export default FilmListing;