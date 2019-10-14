import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import Search from './components/Search/Search';
import SearchTable  from './components/Table/SearchTable';


class App extends React.Component {


  render () {
    return (
      <div>
        <Header/>
        <div className="MainDiv">
          <Search/>
          <SearchTable/>
      </div>
      <Footer/>
      </div>
      
    );
  }
}

export default App;
