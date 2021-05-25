import React from 'react';
import './form.scss'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url:'https://',
            mode:'',
            result:'',
        }
    }

    modeChange = (e, mod) => {
    e.preventDefault();
    this.setState({mode: `${mod}`,
                    result: `${mod}`})
    console.log(this.state)
}

    sub = (e) => {
        e.preventDefault();
        this.setState({result: `${this.state.mode} ${this.state.url}`})
        console.log(this.state.url, this.state.mode)
    }

    render(){
    return (
        <>
        <div className='middle-chunk'>
        <form>
            <input type='text' placeholder="Address" onChange={e=> this.setState({url: e.target.value})} value={this.state.url} />
            <button type='submit' onClick={e=>this.sub(e)}>submit</button>
             </form>
            <div className="button-box">
            <button onFocus={this.state.mode === 'GET'} onClick={e=> {this.modeChange(e, 'GET')}}>GET</button>
            <button onFocus={this.state.mode === 'POST'} onClick={e=> {this.modeChange(e, 'POST')}}>POST</button>
            <button onFocus={this.state.mode === 'PUT'} onClick={e=> {this.modeChange(e, 'PUT')}}>PUT</button>
            <button onFocus={this.state.mode === 'DELETE'} onClick={e=> {this.modeChange(e, 'DELETE')}}>DELETE</button>
            </div>
            
            {(this.state.mode === "PUT" || this.state.mode === "POST") && <textarea className='inp-field' />}
            
            <textarea readonly className="results" value={this.state.result} />
         </div>
       </>
    )}
}

export default Form;