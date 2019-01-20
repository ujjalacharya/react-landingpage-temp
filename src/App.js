import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'lightblue', height: '1000px'}}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
