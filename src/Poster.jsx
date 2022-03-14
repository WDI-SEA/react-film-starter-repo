function Poster({url,alt}) {
  return (  
    <div className="poster">
         <img src={url} alt={alt} />
       </div>
  );
}

export default Poster;


// import { Component } from "react";

// class Poster extends Component {

//   state = {};
//   render() {
//     return (
//       <div className="poster">
//         <img src={this.props.url} alt={this.props.alt} />
//       </div>
//     );
//   }
// }
// export default Poster;
