import FilmRow from './FilmRow'
import {useState} from 'react'

export default function FilmList(props) {

    const [filter, setFilter] = useState('All')

    
    const handleFilterClick = filter => {
        setFilter({filter:filter})

        console.log(`a filter ${filter} was clicked`)
    }

        const films = props.films.map((movie, i) => {
            return <FilmRow key={`FilmRowKey${i}`} film={movie}/>
        })


        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === 'All' ? 'is-active' : ''} `} onClick={() => {handleFilterClick('All')}}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === 'Faves' ? 'is-active' : ''} `} onClick={() => {handleFilterClick('Faves')}}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {films}  
            </div>

        )
    }