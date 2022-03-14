export default function Poster(alt, url) {
  return (
    <div class="Poster">
      <img src={url} alt={alt} />
    </div>
  );
}

// import { Component } from 'react';

// class Poster extends Component {
//   state = {  }
//   render() {
//     return (
//       <div class="Poster">
//         <img src={this.props.url} alt={this.props.title}/>
//       </div>
//     );
//   }
// }

// export default Poster;
