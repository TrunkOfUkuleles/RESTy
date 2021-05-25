import React from 'react';
import './header.scss'


class  Header extends React.Component{

    render(){
       return (
        <header>
            <h1>RESTy</h1>
            <nav>
                <ul>
                    <li>home</li>
                    <li>about</li>
                </ul>
            </nav>
        </header>
    ) 
    }
    
}

export default Header;