import React from 'react';
import './form.scss'

class Form extends React.Component {

    render(){
    return (
        <>
        <div className='middle-chunk'>
        <form>
            <input type='text' placeholder="Address" onChange={e=> this.props.handleType(e)} value={this.props.url} />
            <button type='submit' onClick={e=>this.props.sub(e)}>submit</button>
            <button type='submit' onClick={e=>this.props.handleMode(e)}>GO</button>
        </form>

        <div className="button-box">
            <button  onFocus={this.props.mode === 'GET'} onClick={e=> {this.props.modeChange(e, 'GET')}}>GET</button>
            <button  onClick={e=> {this.props.modeChange(e, 'POST')}}>POST</button>
            <button  onClick={e=> {this.props.modeChange(e, 'PUT')}}>PUT</button>
            <button  onClick={e=> {this.props.modeChange(e, 'DELETE')}}>DELETE</button>
        </div>
            
            {(this.props.mode === "PUT" || this.props.mode === "POST") && 
            <textarea className='inp-field' onChange={e=>this.props.handleQ(e)} value={this.props.body} />}
         </div>
       </>
    )}
}

export default Form;