import React from 'react';
import './_results.scss';
import'../loaders.min.css';
import { If, Then } from 'react-if';

class Result extends React.Component {

    render(){
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
            <If condition={!this.props.loading && this.props.result.length}>
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