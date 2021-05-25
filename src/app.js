

import React from 'react';

const Header = () => {
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

const Footer = () => {
    return (
        <footer>
            <p>HA-HA!</p>
        </footer>
    )
}

const modeChange = (e, mod) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({mode: mod})
}

const Rester = () => {
    return (
        <form>
            <input type='text' placeholder="Address" value={this.state.url} />
            <div className="button-box">
            <button onClick={e=> modeChange(e, 'GET')}>GET</button>
            <button onClick={e=> modeChange(e, 'POST')}>POST</button>
            <button onClick={e=> modeChange(e, 'PUT')}>PUT</button>
            <button onClick={e=> modeChange(e, 'DELETE')}>DELETE</button>
            </div>
            <textarea show={this.state.mode === "PUT" || this.state.mode === "POST"} />
        </form>
    )
}

  
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url:'https://',
            mode:'',

        }
    }


    render(){
  return (
      <>
    <Header />
        <Rester />
    <Footer />
    </>
  );
}}

export default App;