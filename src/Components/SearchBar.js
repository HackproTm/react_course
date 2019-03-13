import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appBar: {
    backgroundColor: '#c2b4ff',
    padding: 20,
    marginTop: 30,
    borderRadius: 10
  }
}

class SearchBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position='static'
              className={classes.appBar}>
        <form noValidate autoComplete='off'>
          <TextField
            onChange={this.props.onFilterTextChange}
            label='Search Text'
            margin='normal'
            fullWidth
            />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.inStockOnly}
                onChange={this.props.onInStockChange}
                value='in_stock'
                color='primary'
              />
            }
            label='Only show products in stock'
          />
        </form>
      </AppBar>
    );
  }
}

export default withStyles(styles)(SearchBar);
