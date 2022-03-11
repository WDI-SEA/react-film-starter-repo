import { Component } from "react";

class Poster extends Component {

  state = {};
  render() {
    return (
      <div className="poster">
        <img src={this.props.url} alt={this.props.alt} />
      </div>
    );
  }
}
export default Poster;
