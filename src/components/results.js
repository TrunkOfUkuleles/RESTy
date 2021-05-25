import React from 'react';
import './results.scss'


class Result extends React.Component {
    render(){
        return (
            <>  
                <p>{this.props.count}</p>
                <textarea readonly className="results" value={this.props.result} />
           </>
        )}
}

export default Result;