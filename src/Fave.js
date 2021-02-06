import React from 'react';

class Fave extends React.Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation(e);
        console.log('Click');
        this.setState({
            isFave: !this.state.isFave
        })
    }
    render() {
        let isFavorited = this.state.isFave ? "remove_from_queue" : "add_to_queue"
        return (
            <div className={`film-row-fave ${isFavorited}`} onClick={this.handleClick}>
                <p className="material-icons">{`${isFavorited}`}</p>
            </div>
        )
    }
}

export default Fave;