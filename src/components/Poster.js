// import React, { Component } from "react";
// export default class Poster extends Component {
//   render() {
//     const pUrl = this.props.url;
//     return (
//       <>
//         <img alt={`poster of ${this.props.title}`} src={pUrl}></img>
//       </>
//     );
//   }
// }
const post = (props) => {
  const pUrl = props.url;
  return (
    <>
      <img alt={`poster of ${this.props.title}`} src={pUrl}></img>
    </>
  );
};

export default post;
