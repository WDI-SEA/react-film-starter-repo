import React, {Component} from "react";

export default class Poster extends Component {
    render() {
        return(
            <>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                />
            </>
        )
    }
}