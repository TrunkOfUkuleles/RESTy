

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
        result:[],
        history:[],
        body:'{ }',
        loading: false,
    }
}

handleChange = (e, mod) => {
  e.preventDefault();
  this.setState({mode: `${mod}`})
}

setLoader = () =>{
  // e.preventDefault();
  this.setState({loading: !this.state.loading})
}

handleType = (e) => {
  this.setState({url: e.target.value})
}

handleQ = (e) => {
  this.setState({body: e.target.value})
}

swissArmy = async(e) => {
  e.preventDefault();
  this.setLoader();
  if (this.state.mode === "GET"){
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    let result;
    await superagent.get(`${this.state.url}`).then(res=>{
      result = res.body.data
    })
    this.setState({result: result})
    console.log("GETSTATE: ", result, JSON.stringify(result, undefined, 2))
  }else if (this.state.mode === "POST"){
    console.log("POSTING")
    let result;
    await superagent.post(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(res=>{
      result = res.body.data
        })
    this.setState({result: result})
  }else if(this.state.mode === "PUT"){
    console.log("PUTTING")
    let result;
    await superagent.put(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(res=>{
      result = res.body.data
    }).catch(err => {
     console.log(err.message)
    })
    this.setState({ result: result})
    console.log(result)
    this.setState({result})
  }
  else if(this.state.mode === "DELETE"){
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    await superagent.delete(`${this.state.url}`).send(this.state.body).then(res=>{
      result = res.body.data
    }).catch(err = conole.log(err))
  }
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
  console.log("SET REDO: ", e.target)
  this.setState({url: e.target.href, body: e.target.bod, mode: e.target.mode})
}


    render(){
  return (
      <>
    <Header />
        <Form handleMode={this.swissArmy} handleQ={this.handleQ} body={this.state.body} modeChange={this.handleChange} sub={this.handleSub} 
        handleType={this.handleType} url={this.state.url} mode={this.state.mode} loading={this.state.loading} setLoad={this.setLoader}/>
        <div className="middle-box">
        <History redo={this.redo} handleRedo={this.redo} >{this.state.history}</History>
        <Result  result={this.state.result}  loading={this.state.loading} setLoad={this.setLoader} rez={this.state.result}>{this.state.result}</Result>
        </div>
    <Footer />
    </>
  );
}}

export default App;