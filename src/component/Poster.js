import React,{Component} from "react";

export default class Poster extends Component{
    render(){
        const url = `the movie poster for ${this.props.title}`
        return(
            <div>
                <img src={this.props.url} alt={url} />
            </div>
        )
    }
}