import React, { Component } from 'react';
import { connect } from 'react-redux'

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import '../Resources/styles.css';
import { addNewProduct } from '../Redux/ActionCreators'
import ModalAddProduct from './ModalAddProduct';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';
import logo from '../Resources/logo.svg';

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = dispatch => ({
  addNewProduct: (product) => addNewProduct(dispatch, product)
})

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      isModalNewProductOpen: false
    };

    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Card className={classes.card}>
          <CardContent>
            <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
              <img src={logo}
                   className='App-logo'
                   alt='logo'/>
              <Typography component='h4'
                          variant='h4'
                          className={classes.title}>
                <i>SEARCHABLE PRODUCT TABLE</i>
              </Typography>
            </div>
            <SearchBar 
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterTextChange={this.handleFilterTextChange}
              onInStockChange={this.handleInStockChange}
            />
            <ProductsTable filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}/>
          </CardContent>
          <CardActions>
            <Button variant='outlined'
                    color='primary'
                    size='small'
                    onClick={this.handleOpen}>
              Add Product
              <AddIcon/>
            </Button>
            <ModalAddProduct isModalNewProductOpen={this.state.isModalNewProductOpen}
                             handleClose={this.handleClose}
                             addNewProduct={this.handleAddProduct}
            />
          </CardActions>
        </Card>
      </>
    );
  }

  handleFilterTextChange = (e) => {
    const filterText = e.target.value;

    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange () {
    this.setState({
      inStockOnly: !this.state.inStockOnly
    });
  }

  handleOpen = () => {
    this.setState({
      isModalNewProductOpen: true
    });
  };

  handleAddProduct = (product) => {
    this.props.addNewProduct(product);
  }

  handleClose = () => {
    this.setState({
      isModalNewProductOpen: false
    });
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilterableProductTable));
