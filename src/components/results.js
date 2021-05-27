import React from 'react';
import './_results.scss'
import { If, Then } from 'react-if';

class Result extends React.Component {


    render(){
        return (
              
            <If condition={this.props.rez.length !== undefined && this.props.rez.length}>
                <Then>
                <div className='result-box'>
                {JSON.stringify(this.props.rez, undefined, 1)}
                </div>
                </Then>
            </If>
           
        )}
}

export default Result;