import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';

// class App extends Component {
// 	state = {
// 		TMDB
// 	};
// 	render() {
// 		return (
// 			<div className="film-library">
// 				<FilmList films={this.state.TMDB.films} />
// 				<Details films={this.state.TMDB.films} />
// 			</div>
// 		);
// 	}
// }

const App = () => {
	const [ allFilms, setFilm ] = useState({
		films: TMDB.films,
		current: {}
	});

	const handleDetailsClick = (movie) => {
		console.log(movie);
		setFilm({ ...allFilms, current: movie });
	};

	return (
		<div className="film-library">
			<FilmList film={allFilms.films} handleDetailsClick={handleDetailsClick} />
			<Details film={allFilms.current} />
		</div>
	);
};

export default App;
