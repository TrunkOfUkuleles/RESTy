
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from './form.js';
import Result from './results.js';
import History from './history.js';
import Help from './help.js';

const Main = (props) => {

  return (
    <main>
      <Switch>
        <Route exact path="/"> 
         <div className="middle-box">
        <Form handleMode={props.handleMode} handleQ={props.handleQ} body={props.body} modeChange={props.modeChange} 
        handleType={props.handleType} url={props.url} mode={props.mode} loading={props.loading} setLoad={props.setLoad}/>
        <Result  result={props.result || []}  loading={props.loading} setLoad={props.setLoad}>{props.result}</Result>
        </div>
        </Route>
        <Route path="/history">
          <History redo={props.redo} >{props.history}</History>
        </Route>
        <Route path="/help">
            <Help />
        </Route>
      </Switch>
    </main>
  )
}

export default Main; 