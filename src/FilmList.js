import { useState } from 'react';
import FilmRow from "./FilmRow"

 export default function FilmList(props) {

    const [filter, setFilter] = useState('all')
    const [fave, setFave] = useState([])
    const [isFave, setIsFave] = useState(false)

    const handleFaveToggle = (film)=>{
        let newFaves = [...fave]
        const filmIndex = newFaves.indexOf(film)
        console.log(filmIndex)
        if (filmIndex === -1) {
            newFaves.push(film)
        } else {
            newFaves.splice(filmIndex, 1)
        }
        setFave(newFaves)


    }
    const handleFilterClick= (filter) => {
        console.log("handleClick working")
            setFilter(filter)

        }

        const filmsToDisplay = filter === 'all' ? props.films : fave
        const allFilms = filmsToDisplay.map((film, i)=> {
            return (
            <FilmRow 
            key={`filmrow ${i}`}
            film={film}
            onFaveToggle= {() => handleFaveToggle(film)}
            isFave={fave.includes(film)}
            handleDetailsClick= {props.handleDetailsClick}
            />
            )
        })

        return(

            <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              <div className="film-list-filters">
              <div className={`film-list-filter ${filter === 'all' ? "is-active" : ""}`} onClick={() => handleFilterClick('all')}> ALL
              <span className="section-count">{props.films.length}</span>
              </div>
              <div className={`film-list-filter ${filter === "faves" ? "is-active" : ""}`} onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{fave.length}</span>
        </div>
    </div>
              <h1>{allFilms}</h1>
            </div>

        )

}