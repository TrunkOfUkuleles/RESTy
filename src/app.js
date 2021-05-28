

import React from 'react';
import './style.scss';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main.js';
import superagent from 'superagent';
import { BrowserRouter } from 'react-router-dom';
// import { useHistory } from 'react-router'

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
// history = () => useHistory

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
    this.setState({result: JSON.stringify(result, undefined, 2)})
    console.log("GETSTATE: ", result, JSON.stringify(result, undefined, 2))
  }else if (this.state.mode === "POST"){
    console.log("POSTING")
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    let result;
    await superagent.post(`${this.state.url}`).send(JSON.stringify(this.state.body)).then(res=>{
      result = res.body.data
        }).catch(err => {
          console.log(err.message)
         })
        
    this.setState({result: result})
    console.log("post post: ", result)
  }else if(this.state.mode === "PUT"){
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    console.log("PUTTING")
    let result;
    await superagent.put(`${this.state.url}`).send(this.state.body).then(res=>{
      result = res.body.data
    }).catch(err => {
     console.log(err.message)
    })
    this.setState({ result: result})
    console.log(result)
    // this.setState({result})
  }
  else if(this.state.mode === "DELETE"){
    this.setState({history: [ ...this.state.history, `${this.state.url}:${this.state.mode}:${this.state.body}`]})
    await superagent.delete(`${this.state.url}`).send(this.state.body).then(res=>{
      result = res.body.data
    }).catch(err = conole.log(err))
  }
}

redo = (e) => {
  e.preventDefault();
  console.log("SET REDO: ", e.target)
  this.setState({url: e.target.linq, body: e.target.bod, mode: e.target.mode})
  this.props.history.push("/")

}


    render(){
  return (
      <>
      <BrowserRouter>
    <Header />
    <Main handleMode={this.swissArmy} handleQ={this.handleQ} body={this.state.body} modeChange={this.handleChange} result={this.state.result} history={this.state.history}
        handleType={this.handleType} url={this.state.url} mode={this.state.mode} loading={this.state.loading} setLoad={this.setLoader} redo={this.redo} />
    <Footer />
    </BrowserRouter>
    </>
  );
}}

export default App;