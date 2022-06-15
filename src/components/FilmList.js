import { useState } from "react";
import FilmRow from "./FilmRow";

const FilmList = (props) => {
  const [fave, setFave] = useState({
    faves: [],
  });
  handleFilterClick = (filter) => {
    console.log(filter);
    props.setState({ filter: filter });
  };

  const films = props.films;
  const allFilms = films.map((film, index) => {
    return <FilmRow film={film} key={`film-${index}`} />;
  });
  return (
    <>
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            onClick={() => handleFilterClick("all")}
            className="film-list-filter"
          >
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div
            onClick={() => handleFilterClick("faves")}
            className="film-list-filter"
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    </>
  );
};

export default FilmList;

// export default class FilmList extends Component {
//   state = {
//     filter: "all",
//   };
//   handleFilterClick = (filter) => {
//     console.log("a filter was clicked");
//     console.log(filter);
//     this.setState({ filter: filter });
//   };
//   render() {
//     const films = this.props.films;
//     const allFilms = films.map((film, index) => {
//       return <FilmRow film={film} key={`film-${index}`} />;
//     });
//     return (
//       <>
//         <div className="film-list">
//           <h1 className="section-title">FILMS</h1>
//           <div className="film-list-filters">
//             <div
//               onClick={() => this.handleFilterClick("all")}
//               className="film-list-filter"
//             >
//               ALL
//               <span className="section-count">{this.props.films.length}</span>
//             </div>
//             <div
//               onClick={() => this.handleFilterClick("faves")}
//               className="film-list-filter"
//             >
//               FAVES
//               <span className="section-count">0</span>
//             </div>
//           </div>
//           {allFilms}
//         </div>
//       </>
//     );
//   }
// }
