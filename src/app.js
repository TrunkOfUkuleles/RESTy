

import React from 'react';
import './style.scss';
import Footer from './components/footer';
import Header from './components/header';
import Form from './components/form';


class App extends React.Component {

    render(){
  return (
      <>
    <Header />
        <Form />
    <Footer />
    </>
  );
}}

export default App;