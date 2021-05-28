import React from 'react';
import './_results.scss'
import { If, Then } from 'react-if';

class Result extends React.Component {


    render(){
        return (
              <>
            <If condition={this.props.result[0]}>
                <Then>
                <div className='result-box'>
                    {/* {JSON.parse(this.props.result)} */}
                {this.props.result}
                </div>
                </Then>
            </If>
           </>
        )}
}

export default Result;