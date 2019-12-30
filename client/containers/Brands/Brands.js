import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../../actions'

class Brands extends Component {

  static componentGetReadyToMount(dispatch, callback) {
    dispatch(actions.getBrandsRequest(callback))
  }

  componentDidMount() {
    const {
      getBrandsRequest
    } = this.props
    getBrandsRequest()
  }

  render() {
    return (
      <div className='brands'>
        <ul className='brands__list'>
          {this.props.brands.map(brand =>
            <li key={brand.id}>{brand.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  getBrandsRequest: PropTypes.func
}

const mapStateToProps = state => {
  const { brand } = state
  return {
    ...brand
  }
}

const mapDispatchToProps = dispatch => ({
  getBrandsRequest: callback =>
    dispatch(actions.getBrandsRequest(callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(Brands)