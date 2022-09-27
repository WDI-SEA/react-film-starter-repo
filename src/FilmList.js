import React, {Component} from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {

    state = {
        filter: 'All'
    }
    
    handleFilterClick = filter => {
        this.setState({
            filter:filter
        })
        console.log(`a filter ${this.state.filter} was clicked`)
    }


    render() {
        const films = this.props.films.map((movie, i) => {
            return <FilmRow key={`FilmRowKey${i}`} film={movie}/>
        })


        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'All' ? 'is-active' : ''} `} onClick={() => {this.handleFilterClick('All')}}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'Faves' ? 'is-active' : ''} `} onClick={() => {this.handleFilterClick('Faves')}}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {films}  
            </div>

        )
    }
}