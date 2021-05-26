

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
        url:'https://swapi.dev/api/people/',
        mode:'',
        result:[],
        count:0,
    }
}

handleChange = (e, mod) => {
  e.preventDefault();
  this.setState({mode: `${mod}`})
  console.log(this.state)
}

handleType = (e) => {
  this.setState({url: e.target.value})
  console.log(this.state)
}

handleSub = async (e) => {
  e.preventDefault();
  this.setState({result: `${this.state.mode} ${this.state.url}`})
  let rez = await fetch(`${this.state.url}`)
  let data = await rez.json();
  console.log("SUB: ", data)
  let hold = JSON.stringify(data.results, undefined, 3)
  // console.log(hold.map(el=> <br>{el}</br>))
  this.setState({result: hold})
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