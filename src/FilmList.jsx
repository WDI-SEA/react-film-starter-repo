import {useState} from "react"
import FilmRow from "./FilmRow"


function FilmList (props){
    const [filter, setFilter] = useState("all") 
    const [faves, setFaves] =useState([])

    const handleFilterClick = (filter) =>{
        // console.log("click")
        setFilter(filter)
    }

    const handleFaveToggle = (film)=>{
        let newFaves= [...faves]
        const filmIndex = newFaves.indexOf(film)
        if(filmIndex <0) {
            newFaves= [...newFaves, film]
        }else{
            newFaves.splice(filmIndex,1)
        }
        setFaves(newFaves)
    }
  
    const allFilms = props.films.map((film, i)=>{
        return (
            <FilmRow
                key= {`film${i}`}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
             />
        )
            
    })
    console.log(allFilms)

    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters" >

                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {handleFilterClick("all")}}>
                                ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                            
                    <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{handleFilterClick("faves")
                    }}>
                            FAVES
                    <span className="section-count">{faves.length}</span>
                    </div>
                </div>
            {console.log(allFilms)}
            {allFilms}
        </div>
            
    )}
export default FilmList