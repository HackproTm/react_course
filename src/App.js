import React, { Component } from 'react'
import './App.css'

import ModalAdd from './Components/Common/ModalAdd';
import Search from './Components/Search/Search'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Search/>
        <br/>
        <ModalAdd/>
        <hr/>
      </div>
    );
  }
}

export default App;
