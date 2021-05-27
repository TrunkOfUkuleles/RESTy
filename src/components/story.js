import React from 'react';


class Childer extends React.Component{
    

    RENDER() {
        return (
            <ul key={this.props.index} className="history-child">{this.props.child}</ul>
        )
    }
}
    

export default Childer;