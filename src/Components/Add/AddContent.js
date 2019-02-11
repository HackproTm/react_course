import React, { Component } from 'react'

class AddContent extends Component {
  render() {
    return (
      <form>
        <input placeholder='Product Name'/>
        <br/>
        <input placeholder='Price'/>
        <br/>
        <input placeholder='Category'/><select/>
      </form>
    );
  }
}

export default AddContent;
