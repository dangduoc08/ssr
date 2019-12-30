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
      dispatch
    } = this.props
    Brands.componentGetReadyToMount(dispatch)
  }

  render() {
    return (
      <div className='brands'>
        <ul className='brands__list'>
          {this.props.brands.map(brand =>
            <li key={brand.id}>
              {brand.name}
              <img src={brand.image} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  getBrandsRequest: PropTypes.func,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  const { brand } = state
  return {
    ...brand
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Brands)