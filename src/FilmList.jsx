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
        // index will return a value of -1 if the item is not in the array
        if(filmIndex <0) {
            newFaves= [...newFaves, film]
            setFaves(newFaves)
        }else{
            // if film is in the array, index will return a value starting at 0
            newFaves.splice(filmIndex,1) //-> (where you want to start the splice,  how many to remove)
            setFaves(newFaves)
        }
    }
    const filmsToDisplay = filter === "all" ? props.films : faves
  
    const allFilms = filmsToDisplay.map((film, i)=>{
        return (
            <FilmRow
                key= {`film${i}`}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
             />
        )
            
    })

    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters" >

                    {/* all films */}
                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {handleFilterClick("all")}}>
                            ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>

                    {/* Fave films */}
                    <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{handleFilterClick("faves")
                    }}>
                        FAVES
                    <span className="section-count">{faves.length}</span>
                    </div>
                
                </div>
            {/* {console.log(allFilms)} */}
            {allFilms}
        </div>
            
    )}
    
export default FilmList