import React, { Component } from "react";

class Fave extends Component {
  state = {
    isFave: false
  }

  handleClick = (event) => {
    event.stopPropagation();
    this.setState({ isFave: !this.state.isFave })
  }

  render() {
    const queueAction = (this.state.isFave ? "remove_from_queue" : "add_to_queue");
    return (
      <div
        className={"film-row-fave " + queueAction}
        onClick={this.handleClick}
      >
        <p className="material-icons">{queueAction}</p>
      </div>
    );
  }
}

export default Fave;