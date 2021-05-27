

import React from 'react';
import './style.scss';
import Footer from './components/footer';
import Header from './components/header';
import Form from './components/form';
import Result from './components/results';
import History from './components/history';
import superagent from 'superagent';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        url:'https://swapi.dev/api/people/',
        mode:'GET',
        result:[],
        history:['start me'],
        body:'{ }',
        loading: false,
    }
}

handleChange = (e, mod) => {
  e.preventDefault();
  this.setState({mode: `${mod}`})
  console.log(this.state)
}

setLoader = (e) =>{
  e.preventDefault();
  this.setState({loading: !this.state.loading})
}

handleType = (e) => {
  this.setState({url: e.target.value})
  console.log(this.state)
}

handleQ = (e) => {
  this.setState({body: e.target.value})
}

swissArmy = async(e) => {
  if (this.state.mode === "GET"){
    let result = await superagent.get(`${this.state.url}`).then(el =>{
      return el.json()
    })
    console.log(result)
    this.setState({result})
  }else if (this.state.mode === "POST"){
    let result = await superagent.POST(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(el =>{
      return el.json()
    })
    console.log(result)
    this.setState({result})
  }else if(this.state.mode === "PUT"){
    let result = await superagent.POST(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(el =>{
      return el.json()
    })
    console.log(result)
    this.setState({result})
  }else if(this.state.mode === "DELETE"){

  }
}

handleSub = async (e) => {
  e.preventDefault();
  this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
  let rez = await fetch(`${this.state.url}`)
  let data = await rez.json();
  console.log("SUB: ", data)
  let hold = JSON.stringify(data.results, undefined, 3)
  let go = JSON.parse(data.results)
  console.log(go)
  this.setState({result: hold})
}


    render(){
  return (
      <>
    <Header />
        <Form handleQ={this.handleQ} body={this.state.body} modeChange={this.handleChange} sub={this.handleSub} 
        handleType={this.handleType} url={this.state.url} mode={this.state.mode} loading={this.state.loading} setLoad={this.setLoader}/>
        <Result result={this.state.result}  loading={this.state.loading} setLoad={this.setLoader}/>
        <History history={this.state.history}/>
    <Footer />
    </>
  );
}}

export default App;