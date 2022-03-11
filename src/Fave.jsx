import { Component } from "react";

class Fave extends Component {

  state = {
    isFave: false
  }

  clickBtnHandler = (e) => {
    e.stopPropagation()
    // console.log('clicked')
    this.setState((prevState)=>{ return {isFave: !prevState.isFave} }, () => console.log('updated', this.state))
  }
  
  
  render() {
    
    return (
      <div
        onClick={this.clickBtnHandler}
        className={`film-row-fave ${this.state.isFave?'remove_from_queue':'add_to_queue'}`}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave