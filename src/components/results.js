import React from 'react';
import './results.scss'
// import Person from './person'

class Result extends React.Component {


    render(){
        return (
            <div className='result-box'>  
                {
                this.props.rez
                }
                
                
           </div>
        )}
}

export default Result;