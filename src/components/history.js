import React from 'react';
import './_history.scss'
import { If, Then } from 'react-if';
import { Link } from 'react-router-dom';

class History extends React.Component{
        
    

    render(){
    let test = this.props.history
        return(
            <>
            <If condition={this.props.children.length != undefined && this.props.children.length > 0}>
             <Then>
            <div className="history-box">
            <h2>Search History</h2>
            <ol className="history-list" >
            {this.props.children.map(el=>{
                let stuffs = el.split(':')
                return <li key={el}><Link to={{ pathname: "/" }} linq={stuffs[0]+":"+stuffs[1]} bod={stuffs[3]} 
                mode={stuffs[2]} onClick={e => this.props.redo(e)}>{stuffs[0]+":"+stuffs[1]}</Link></li>
            })}
            </ol>
            </div>
                </Then>

            </If>
            <If condition={this.props.loading}>
                <Then>
                    "LOADING"
                </Then>
            </If>
            </>
        )
    }
}

export default History;