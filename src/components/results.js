import React from 'react';
import './_results.scss'
import { If, Then } from 'react-if';

class Result extends React.Component {

    render(){
        console.log(`RESULT:${this.props.result}`)
        return (
              <>
              <If condtion={this.props.loading}>
                  <Then>
                      <div className="loaders">
                  <div class="loader" >
                      <div className="ball-pulse">
                      <div />
                      <div />
                      <div />
                      </div>
                  </div>
                  </div>
                  </Then>
              </If>
            <If condition={this.props.result.length}>
                <Then>
                <div className='result-box'>
                {this.props.result[0]}
                </div>
                </Then>
            </If>
           </>
        )}
}

export default Result;