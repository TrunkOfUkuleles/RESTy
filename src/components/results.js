import React from 'react';
import './results.scss'
// import Person from './person'

class Result extends React.Component {


    render(){
        return (
            <div className='result-box'>  
                <p>{this.props.count}</p>
                {this.props.result.length>0 &&
                this.props.result
                }
                
                
           </div>
        )}
}

export default Result;