import React, { Component } from 'react'
import './App.css'

import Title from './Title'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Title/>
        <SearchBar/>
        <ProductTable/>
      </div>
    );
  }
}

export default App;
