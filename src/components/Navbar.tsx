import React from 'react'
import { connect } from 'react-redux'
import { toggleSignInModal, toggleSignOutModal } from '../actions/actionCreators'
import { Dispatch, Home, HomeReducer } from '../types/types'

type Props = {
  dispatch: Dispatch,
  home: Home
}

class Navbar extends React.Component<Props> {
  render () {
    const { loggedIn } = this.props.home
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" style={{ color: '#FFF' }} href='/'>Project Zed</a>
          <form className="form-inline">
            <button
              onClick={(e) => {
                e.preventDefault()
                loggedIn ? this.props.dispatch(toggleSignOutModal()) : this.props.dispatch(toggleSignInModal())
              }}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
              { loggedIn ? `Sign Out` : `Sign In` }
            </button>
          </form>
        </nav>
      </div>
    )
  }
}

function mapStateToProps ({ homeReducer }: { homeReducer : HomeReducer }) {
  return {
    home: homeReducer
  }
}

export default connect(mapStateToProps, null)(Navbar)
