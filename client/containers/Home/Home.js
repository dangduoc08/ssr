import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import logo from '../../assets/logo.svg'
import { fetchFlagsRequest } from '../../redux/actions'
class Home extends React.Component {
  static serveData(dispatch, cb) {
    dispatch(fetchFlagsRequest(cb))
  }

  componentDidMount() {
    this.props.fetchFlagsRequest()
  }
  
  render() {
    return (
      <div className='home'>
        <header className='home__header'>
          <img src={logo} className='home__logo' alt='logo' />
          <p>
            Edit <code>src/containers/Home.js</code> and save to reload.
          </p>
          <a
            className='home__link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <div style={{ color: '#fff' }}>
          {this.props.user.map(user =>
            <p key={user.id}>{user.name}</p>
          ) }
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  fetchFlagsRequest: propTypes.func,
  user: propTypes.array
}

const mapStateToProps = state => ({
  user: state.flag
})

const mapDispatchToProps = dispatch => ({
  fetchFlagsRequest: () => dispatch(fetchFlagsRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)