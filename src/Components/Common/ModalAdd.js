import React, { Component } from 'react'

import AddProduct from '../Add/AddProduct'

class ModalAdd extends Component {
  render() {
    return (
      <div className = 'ModalProduct'>
        <button>Add Product</button>
        <br/>
        <AddProduct/>
      </div>
    );
  }
}

export default ModalAdd;
