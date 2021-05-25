

import React from 'react';
import './style.scss';
import Footer from './components/footer';
import Header from './components/header';
import Form from './components/form';
import Result from './components/results';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        url:'https://',
        mode:'',
        result:'',
        count:0,
    }
}

handleChange = (e, mod) => {
  e.preventDefault();
  this.setState({mode: `${mod}`,
                  result: `${mod}`})
  console.log(this.state)
}

handleType = (e) => {
  this.setState({url: e.target.value})
}

handleSub = async (e) => {
  e.preventDefault();
  this.setState({result: `${this.state.mode} ${this.state.url}`})
  let rez = await fetch(`${this.state.url}`)
  let data = await rez.json();
  console.log("SUB: ", data)
  this.setState({result: `${data}`})
}


    render(){
  return (
      <>
    <Header />
        <Form modeChange={this.handleChange} sub={this.handleSub} handleType={this.handleType} url={this.state.url} mode={this.state.mode}/>
        <Result count={this.state.count} result={this.state.result}  />
    <Footer />
    </>
  );
}}

export default App;