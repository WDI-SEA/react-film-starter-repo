import { Component } from "react";

export default class Fave extends Component {
  state = {
    isFave: false,
  };
  handleClick = (e) => {
    this.setState((prevState) => {
      return { isFave: !prevState.isFave };
    });
    e.stopPropagation();
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`film-row-fave ${
          this.state.isFave === true ? "remove_from_queue" : "add_to_queue"
        }`}
      >
        <p className="material-icons">{`${
          this.state.isFave === true ? "remove_from_queue" : "add_to_queue"
        }`}</p>
      </div>
    );
  }
}
