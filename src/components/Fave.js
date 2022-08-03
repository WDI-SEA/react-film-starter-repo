import React, { Component } from "react";

export default class Fave extends Component {
  state = {
    isFave: false,
  };
  action = this.state.isFave === true ? "remove_from_queue" : "add_to_queue";

  render() {
    const handleClick = (e) => {
      console.log("hi ", this.state.isFave);
      this.setState((prevState) => ({ isFave: !prevState.isFave }));
    }; //e.stopPropagation() // Says I need this to only see one message. I already am. PUt maybe i missed soemthing so I will keep this here so I can easlly add it.
    return (
     <div className={`film-row-fave ${this.action}`} 
          onClick={handleClick}
     >
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
