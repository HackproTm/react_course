import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

import Loading from './LoadingIndicator'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import { selectProduct, unSelectProduct } from '../Redux/ActionCreators'

const styles = {
  table: {
    minWidth: 500
  },
  notice: {
    padding: 50
  }
};

const mapStateToProps = state => {
  return {
    productsRes: state.products,
  }
}

const mapDispatchToProps = { selectProduct, unSelectProduct }

class ProductsTable extends Component {
  render() {
    const { classes } = this.props;

    if (this.props.productsRes.isLoading) {
      return <Loading />
    }
    if (_.get(this.props, ['productsRes', 'errMess'], null)) {
      return <div className={classes.notice}>{this.props.productsRes.errMess}</div>
    }

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding='checkbox'></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderProductsRows()}
        </TableBody>
      </Table>
    )
  }

  renderProductsRows = () => {
    const productsByCategory = _.groupBy(this.props.productsRes.products, 'category')
 
    return _.reduce(productsByCategory, (accumulator, group, key, col) => {
      const categoryAcc = [...accumulator, <ProductCategoryRow key={key} category={key}/>]
      return this.addProductsGroup(group, categoryAcc)
    }, [])
  }

  addProductsGroup = (productsGroup, categoryAccumulator) => {
    return _.reduce(productsGroup, (acc, product, index) => {
      if (this.shouldBeExcluded(product)) return acc
      return [...acc,
        <ProductRow
          key={`${index}_${product.name}`}
          product={product}
          onSelect={this.props.selectProduct}
          onUnSelect={this.props.unSelectProduct}
          selected={this.isSelected(product)}
        />
      ]
    }, categoryAccumulator)
  }

  shouldBeExcluded = (product) => {
    const { filterText, inStockOnly } = this.props;

    return (
      _.toLower(product.name).indexOf(_.toLower(filterText)) === -1 ||
      (inStockOnly && !product.stocked)
    )
  }

  isSelected (product) {
    return this.props.productsRes.selectedProducts.includes(product)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductsTable))
