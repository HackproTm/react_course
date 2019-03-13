import React, { Component } from 'react';
import { connect } from 'react-redux'


import { withStyles } from '@material-ui/core/styles'

import '../Resources/styles.css';
import { fetchProducts } from '../Redux/ActionCreators'
import FilterableProductTable from './FilterableProductTable'
import Header from './Header'

const styles = {
  container: {
    padding: 50,
    maxWidth: '600px'
  }
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts)
})

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Header />
        <div className={classes.container}>
          <FilterableProductTable />
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
