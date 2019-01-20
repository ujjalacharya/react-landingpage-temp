import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'lightblue', height: '1000px'}}>
        <Header />
      </div>
    );
  }
}

export default App;
