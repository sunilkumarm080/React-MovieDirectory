import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import Search from './components/Search/Search';
import SearchTable  from './components/Table/SearchTable';


class App extends React.Component {
  state = { message: "parent message" }
  callbackFunction = (childData) => {
    this.setState({message: childData})
}

  render () {
    return (
      <div>
        <Header/>
        <div className="MainDiv">
          <Search parentCallback = {this.callbackFunction}/>
          <p> {this.state.message} </p>
          <SearchTable/>
      </div>
      <Footer/>
      </div>
      
    );
  }
}


export default App;
