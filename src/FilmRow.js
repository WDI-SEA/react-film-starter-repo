// import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props){
    

    return (
        <div className='film-row'
            onClick={() => props.handleDetailsClick(props.film)}
        >
            <Poster 
                url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                alt={props.film.title}
            />

            <div className='film-summary'>
                <h1>{props.film.title}</h1>

                {/* <p>{props.film.release_date.split('-')[0]}</p> */}
                {/* <p>{new Date(props.film.release_date).getFullYear()}</p> */}
                <p>{props.film.release_date.substring(0, 4)}</p>
            </div>

            <Fave 
                isFave = {props.isFave}
                onFaveToggle= {()=>props.onFaveToggle(props.film)}
            />
        </div>
    )
}

// export default class FilmRow extends Component {

//     handleDetailsClick = film => {
//         console.log('fetching details for film:', film.title)
//     }

//     render() {
//         return (
//             <div className='film-row'
//                 onClick={() => this.handleDetailsClick(this.props.film)}
//             >
//                 <Poster 
//                     url={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
//                     alt={this.props.film.title}
//                 />

//                 <div className='film-summary'>
//                     <h1>{this.props.film.title}</h1>

//                     {/* <p>{this.props.film.release_date.split('-')[0]}</p> */}
//                     {/* <p>{new Date(this.props.film.release_date).getFullYear()}</p> */}
//                     <p>{this.props.film.release_date.substring(0, 4)}</p>
//                 </div>

//                 <Fave />
//             </div>
//         )
//     }
// }