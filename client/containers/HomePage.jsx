import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import queryString from 'query-string';
import { getCurrentUser, noToken } from '../actions';
import Dashboard from './Dashboard';

class HomePage extends Component {

  render() {
    const currentUser = this.props.currentUser;

    return (
      <div className="">
        {!currentUser.isAuthInProgress ?
          <div>
            <div className="container">
              <Header currentUser={currentUser} />
            </div>
            {!currentUser.isAuthenticated ?
              <section className="hero is-link is-fullheight-with-navbar">
                <div className="hero-body has-text-centered">
                  <div className="container">
                    <p className="title">
                      Progress updates for AltCampus Students
                    </p>
                    <p className="subtitle">
                      What did you learn today? Tweet and Reflections for everyday.
                    </p>
                  </div>
                </div>
              </section>
              :
              <Dashboard />
            }
          </div>
          : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(HomePage);