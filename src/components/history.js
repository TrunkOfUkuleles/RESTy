import React from 'react';
import './_history.scss'
import Childer from './story'

class List extends React.Component{

     Childer(props){
        return (
        <ul key={props.index} className="history-child">{props.child}</ul>
    )}
        
    

    render(){
        return(
            <>
            <h2>Search History</h2>
            <div className="history-box">
            {React.Children.map(this.props.history, (child, index) => {
                return(
                    
                   <Childer key={index} child={child} />

                )
            })}
            </div>
            </>
        )
    }
}

export default List;