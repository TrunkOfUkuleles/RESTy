import React from 'react';
import './_history.scss'
// import Childer from './story'

class History extends React.Component{
        
    

    render(){
    let test = this.props.history
        return(
            
            <div className="history-box">
            <h2>Search History</h2>
            <ol className="history-list" >
            {/* {test.forEach(el =>{
                let stuffs = el.split(':')
                return (<li key={el}><a href={stuffs[0]+":"+stuffs[1]} bod={stuffs[3]} mode={stuffs[2]} onClick={e => this.props.redo(e)}>{stuffs[0]+":"+stuffs[1]}</a></li>)
            }
            
            )} */}
            {this.props.children}
            </ol>
            </div>
            
        )
    }
}

export default History;