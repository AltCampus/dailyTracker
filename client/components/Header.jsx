import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import currentUser from '../reducers/currentUser';
import { logOut } from '../actions';

function Header({ currentUser, history, dispatch }) {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h4 className="title is-4">DailyTracker</h4>
        </Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">        
        {
          currentUser.isAuthenticated ?
            <div className="navbar-start">
              <Link to="/updates" className="navbar-item">
                Updates
              </Link>
            </div>
          : null
        }

      <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                currentUser.isAuthenticated ?
                  <a className="button is-primary" onClick={() => {
                    dispatch(logOut())
                    history.push('/'); 
                  }}>
                    <strong>Logout</strong>
                  </a>
                  :
                  <a className="button is-primary" href="/auth/github">
                    <strong>Login</strong>
                  </a>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(connect()(Header));