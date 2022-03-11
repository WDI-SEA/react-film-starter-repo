import { Component } from 'react';

export default class Poster extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <img src={this.props.imgUrl} alt={this.props.alt} />
            </>
        );
    }
}