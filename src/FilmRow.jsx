import react, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

class FilmRow extends Component {

    handleDetailsClicked = (film) => {
        console.log(`Fetching details for ${film}`)
    }

  render() {
    const posterUrl =
      "https://image.tmdb.org/t/p/w780/" + [this.props.films.poster_path];
    const date = new Date(this.props.films.release_date);
    const year = date.getFullYear();
    return (
      <div className="film-row"onClick={()=>this.handleDetailsClicked(this.props.films.title)}>
        <Poster
        url={posterUrl} 
        alt={this.props.films.title}
        />
        <div className="film-summary">
          <Fave />  
          <h1>{this.props.films.title}</h1>
          <p>{year}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
