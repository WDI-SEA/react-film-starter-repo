import {useState} from "react"
import FilmRow from "./FilmRow"


function FilmList (props){
    const [filter, setFilter] = useState("all") 
    const [faves, setFaves] =useState([])

    const handleFilterClick = (filter) =>{
        // console.log("click")
        setFilter(filter)
    }

    const allFilms = props.films.map((film, i)=>{
        return(
            <FilmRow
                key= {`film${i}`}
                film={film}
             />
            )
            
        })
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
                            <span className="section-count">0</span>
                            </div>
                    </div>
                {console.log(allFilms)}
                {allFilms}
            </div>
            
    )}
export default FilmList