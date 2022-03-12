import { useState } from "react"
import FilmRow from "./FilmRow"

export default function FilmList(props) {
    const [filter, setFilter] = useState({
        filter: "all",
    })

    const [faves, setFaves] = useState({
        faves: []
    })

    const handleFaveToggle = (filmObject) =>{
        let newFaves = faves.faves.slice()
        const filmIndex = newFaves.indexOf(filmObject)
        if(filmIndex === -1){
            console.log(`adding ${filmObject} to faves`)
            newFaves.push(filmObject)
        }else{
            console.log(`removing ${filmObject} from faves`)
            newFaves.splice(filmIndex,1)
        }
        setFaves(newFaves)
    }

    const filmTitle = props.films.map((film, idx) => {
        return <FilmRow 
                film={film} 
                key={`filmrow-${idx}`}
                onFaveToggle={handleFaveToggle}
                isFave={faves.faves.includes(film)}
                />
    })


    const handleFilterClick = (filter) => {
        console.log(`a filter was clicked ${filter}`)

    }
    return (
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div
                        className={`all`}
                        onClick={() => {
                            handleFilterClick('all')
                            // setFilter({
                            //     filter: "all"
                            // })
                        }}
                    >
                        ALL
                        <span className="section-count">
                            {props.films.length}
                        </span>
                    </div>
                    <div
                        className={`faves`}
                        onClick={() => {
                            handleFilterClick('faves')
                            // setFilter({
                            //     filter: "faves"
                            // })
                        }}
                    >
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {filmTitle}
            </div>
        </>
    )
}
