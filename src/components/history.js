import React from 'react';
import './_history.scss';
import'../loaders.min.css';
import { If, Then } from 'react-if';
import { Link } from 'react-router-dom';

class History extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:false,
            modeBox: {url:'',
                        mode:'',
                        body:''}
        }
    }

     showMode = (e) => {
         console.log("link history", e)
        this.setState({modeBox: 
                            {url: `${e.url}`, 
                            mode: `${e.mode}`, 
                            body: `${e.body}`
                        }, 
                      mode: !this.state.mode}
                     )
        // this.props.redo({target: {linq: `${e.url}`, 
        //                             bod: `${e.body}`, 
        //                             mode: `${e.mode}` 
        //                         }
        //                 })
    }

    testey = (e) => {
        // e.preventDefault();
        console.log("testey! ", this.state)
        // this.props.redo(this.state.modeBox)
    }

 displayMode = (props) => {
        return (
            
            <div className="mode" >
                <div className="closer" onClick={()=>{this.setState({mode: !this.state.mode})}} />
                <div className="mode-box"> 
                <h3>Address: {props.url}</h3>
                <h4>Method: {props.mode}</h4>
                <h4>Body: {props.body}</h4>

                <button value={this.state.modeBox} onclick={() => this.testey()}>LOAD AGAIN</button>
                </div>
            </div>
        )
    }
    

    render(){

        return(
            <>
                 <If condition={this.props.loading}>
                <Then>
                     <div className="loaders">
                  <div class="loader" >
                      <div className="ball-pulse">
                      <div />
                      <div />
                      <div />
                      </div>
                  </div>
                  </div>
                </Then>
            </If>
            <If condition={this.props.children.length != undefined && this.props.children.length > 0}>
             <Then>
                 <If condition={this.state.mode}>
                     <Then>
                         {this.displayMode(this.state.modeBox)}
                     </Then>
                 </If>
            {/* {this.displayMode(this.state.modeBox)} */}
            <h2>Search History</h2>
            <ol className="history-list" >
            {this.props.children.map(el=>{
                let stuffs = el.split('*')
                // return <li key={el}><Link onClick={e => this.props.redo(e)} to={{ pathname: "/" }} linq={stuffs[0]+":"+stuffs[1]} bod={stuffs[3]} 
                // mode={stuffs[2]} >{stuffs[0]+":"+stuffs[1]}</Link></li>
                return <li><div key={el} onClick={ (e) =>{this.showMode({url: `${stuffs[0]}`,
                                                                    mode: `${stuffs[1]}`,
                                                                    body:`${stuffs[2]}`}
                //  linq={stuffs[0]+":"+stuffs[1]} bod={stuffs[3]} mode={stuffs[2]}
                )}}>
                    {stuffs[0]}
                </div></li>
            })}
            </ol>
                </Then>

            </If>
       
            </>
        )
    }
}

export default History;