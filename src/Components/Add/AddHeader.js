import React, { Component } from 'react'

class AddHeader extends Component {
  render() {
    return (
      <form>
        <h1>Add a Product</h1>
        <br/>
        <h4>Please fill the data requested in this dialog to add a product to out table, including Product Name, Price and Category.</h4>
      </form>
    );
  }
}

export default AddHeader;
