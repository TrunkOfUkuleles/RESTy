

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
        url:'https://reqres.in/api/users/2',
        mode:'GET',
        result:[{id:2,email:"janet.weaver@reqres.in",first_name:"Janet",last_name:"Weaver",support:{url:"https://reqres.in/#support-heading"}}],
        history:[],
        body:'{ }',
        loading: false,
    }
}

handleChange = (e, mod) => {
  e.preventDefault();
  this.setState({mode: `${mod}`})
  console.log(this.state)
}

setLoader = () =>{
  // e.preventDefault();
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
  e.preventDefault();
  this.setLoader();
  if (this.state.mode === "GET"){
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    console.log("GETTING")
    let result = await superagent.get(`${this.state.url}`).then(el =>{

      let rez = el.text.data
      return rez
    })
    console.log("GOTTED?: ", result)
    this.setState({result: result})
    console.log("GETSTATE: ", this.state)
  }else if (this.state.mode === "POST"){
    console.log("POSTING")
    let result = await superagent.POST(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(el =>{
      return el.json()
    })
    console.log(result)
    this.setState({result})
    this.setLoader();
  }else if(this.state.mode === "PUT"){
    console.log("PUTTING")
    let result = await superagent.POST(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(el =>{
      return el.json()
    })
    console.log(result)
    this.setState({result})
  }
  // else if(this.state.mode === "DELETE"){

  // }
}

handleSub = async (e) => {
  e.preventDefault();
  this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
  let rez = await fetch(`${this.state.url}`)
  let data = await rez.json();
  console.log("SUB: ", data.data)
  let hold = JSON.stringify(data.results, undefined, 3)
  let go = JSON.stringify(data)
  console.log("GO? ",go.data)
  this.setState({result: hold})
}

redo = (e) => {
  e.preventDefault();
  let set = e.target.value.split(':')
  console.log("SET REDO: ", set)
  this.setState({url: set[0]+":"+set[1], body: set[3], mode: set[0]})
}


    render(){
  return (
      <>
    <Header />
        <Form handleMode={this.swissArmy} handleQ={this.handleQ} body={this.state.body} modeChange={this.handleChange} sub={this.handleSub} 
        handleType={this.handleType} url={this.state.url} mode={this.state.mode} loading={this.state.loading} setLoad={this.setLoader}/>
        <div className="middle-box">
        <History redo={this.redo} handleRedo={this.redo} hidden={this.state.history.length>0}>{this.state.history}</History>
        <Result  result={this.state.result}  loading={this.state.loading} setLoad={this.setLoader} rez={this.state.result} hidden={this.state.result.length>0} >{this.state.result}</Result>
        </div>
    <Footer />
    </>
  );
}}

export default App;