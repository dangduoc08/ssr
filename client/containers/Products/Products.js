import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../../actions'

class Products extends Component {

  static componentGetReadyToMount(dispatch, callback) {
    dispatch(actions.getProductsRequest(callback))
  }

  componentDidMount() {
    const {
      getProductsRequest
    } = this.props
    getProductsRequest()
  }

  render() {
    return (
      <div className='products'>
        <ul className='products__list'>
          {this.props.products.map(product =>
            <li key={product.id}>{product.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.array,
  getProductsRequest: PropTypes.func
}

const mapStateToProps = state => {
  const { product } = state
  return {
    ...product
  }
}

const mapDispatchToProps = dispatch => ({
  getProductsRequest: callback =>
    dispatch(actions.getProductsRequest(callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)