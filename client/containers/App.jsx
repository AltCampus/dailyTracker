import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getCurrentUser, updateToken, noToken } from '../actions';
import { withRouter } from 'react-router-dom';

class App extends Component {
  
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const token = query.t || localStorage.getItem('authToken');

    if(token) {
      this.props.dispatch(updateToken(token));
      this.props.dispatch(getCurrentUser());
      query.t ? this.props.history.push('/') : null;
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    
    return (
      <div>
        {!currentUser.isAuthInProgress ? this.props.children : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default withRouter(connect(mapStateToProps)(App));