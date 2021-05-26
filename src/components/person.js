
import React from 'react';


class Person extends React.Component{
    render(){
        return(
            <a href={this.props.url}>{this.props.name}</a>
        )
    }


}

export default Person;