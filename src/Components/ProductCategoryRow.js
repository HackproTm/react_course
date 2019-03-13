import React, { Component } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tableCell: {
    letterSpacing: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '16px !important',
    backgroundColor: '#d1c8f8',
    color: '#585373'
  }
};

class ProductCategoryRow extends Component {
  render() {
    const { classes, category } = this.props;

    return (
      <TableRow>
        <TableCell component="td"
                   scope="row"
                   colSpan="3"
                   className={classes.tableCell}>
          {category}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(ProductCategoryRow);
