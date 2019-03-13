import React, { Component } from 'react'
import Draggable from 'react-draggable';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const categories = [
  {
    value: 'Sporting Goods',
    label: 'Sporting Goods',
  },
  {
    value: 'Electronics',
    label: 'Electronics',
  }
];

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    heigth: 300,
    margin: theme.spacing.unit * 3
  },
  titleModal: {
    backgroundColor: '#c2b4ff'
  },
  modal: {
    backgroundColor: '#eae5fd'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: '#ffffff'
  },
  dense: {
    marginTop: 30
  },
  menu: {
    width: 300
  },
});

class ModalAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      productName: '',
      productPrice: '',
      productCategory: '',
      productInStock: false
    }
  }
  
  render() {
    const { classes } = this.props;

    return (
      <Dialog open={this.props.isModalNewProductOpen}
              onClose={this.handleClose}
              PaperComponent={this.paperComponent}>
        <DialogTitle className={classes.titleModal}>Add New Product</DialogTitle>
        <DialogContent className={classes.modal}>
          <FormControl component='fieldset' className={classes.container}>
            <FormGroup row>
              <TextField
                autoFocus
                margin='normal'
                label='Product Name'
                type='text'
                value={this.state.productName}
                onChange={this.handleValueChange('productName')}
                variant='outlined'
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                margin='normal'
                label='Product Price'
                type='number'
                value={this.state.productPrice}
                onChange={this.handleValueChange('productPrice')}
                variant='outlined'
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                select
                margin='normal'
                label='Product Category'
                value={this.state.productCategory}
                onChange={this.handleValueChange('productCategory')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                variant='outlined'
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              >
                {this.fetchCategories()}
              </TextField>
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.productInStock}
                    onChange={this.handleCheckedChange('productInStock')}
                    value={this.state.productInStock}
                  />
                }
                label="In Stock"
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={this.handleAddProduct} color='primary' disabled={this.shouldDisableButton()}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  handleClose = () => {
    this.handleCleanFields()
    this.props.handleClose()
  }

  shouldDisableButton = () => {
    return this.state.productName === undefined || this.state.productName === null || this.state.productName === '' ||
           this.state.productCategory === undefined || this.state.productCategory === null || this.state.productCategory === '' ||
           this.state.productPrice === undefined || this.state.productPrice === null || this.state.productPrice < 0
  }

  handleCleanFields = () => {
    this.setState({
      productId: '',
      productName: '',
      productCategory: '',
      productPrice: '',
      productInStock: false
    })
  }

  handleAddProduct = () => {
    const uuidv4 = require('uuid/v4');
    
    const newProduct = {
      id: uuidv4(),
      name: this.state.productName,
      price: `$${Number(this.state.productPrice).toFixed(2)}`,
      category: this.state.productCategory,
      stocked: this.state.productInStock
    }

    this.props.addNewProduct(newProduct)
    this.handleCleanFields()
    this.props.handleClose()
  }

  fetchCategories = () => {
    return categories.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))
  }

  handleValueChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleCheckedChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  paperComponent = (props) => {
    return (
      <Draggable>
        <Paper {...props} />
      </Draggable>
    );
  }
}

export default withStyles(styles)(ModalAddProduct);
