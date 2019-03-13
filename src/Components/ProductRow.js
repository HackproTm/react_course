import React, { Component } from 'react';

import Checkbox from '@material-ui/core/Checkbox'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cellSpan: {
    color: 'red'
  },
  cellWidth: {
    width: '20px !important'
  }
};

class ProductRow extends Component {
  render() {
    const { classes, product, selected, onSelect, onUnSelect } = this.props
    const name = product.stocked ?
      product.name :
      <span className={classes.cellSpan}>
        {product.name}
      </span>;

    return (
      <TableRow>
        <TableCell padding='checkbox'
                   className={classes.cellWidth}>
          <Checkbox
            checked={selected}
            color='primary'
            disabled={!product.stocked}
            onChange={() => selected ? onUnSelect(product) : onSelect(product)} />
        </TableCell>
        <TableCell component='td'
                   scope='row'>
          {name}
        </TableCell>
        <TableCell align='right'>
          {product.price}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(ProductRow);
