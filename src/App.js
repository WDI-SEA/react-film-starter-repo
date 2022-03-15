import React, { Component } from 'react';
import { useState, useEffect } from 'react';
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
		films: [],
		current: {}
	});

	const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env
		.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

	useEffect(() => {
		console.log('UseEffect is firing!');
		fetch(popularFilmsUrl).then((response) => response.json()).then((jsonData) => {
			console.log(jsonData.results);
			setFilm({ films: jsonData.results, current: allFilms.current });
		});
	}, []);

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
