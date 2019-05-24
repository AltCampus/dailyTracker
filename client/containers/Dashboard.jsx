import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import { createDailyUpdate } from '../actions'; 

class Dashboard extends Component {
  state = { tweetURL: '', reflection: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(createDailyUpdate(this.state));
    this.props.history.push('/updates');
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <form className="form column is-half has-text-centered">
            <h4 className="subtitle">What did you learn today?</h4>
            <div className="field">
              <label className="label">Tweet URL</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Tweet URL"
                  onChange={(e) => this.setState({ 'tweetURL': e.target.value })}
                />
              </div>
            </div>
            <label className="label">Reflection</label>
            <textarea
              className="textarea"
              onChange={(e) => this.setState({ 'reflection': e.target.value })}
              placeholder="Reflection"
            />
            <button className="button" onClick={this.handleSubmit}>Save</button>
          </form>
          <div className="column"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Dashboard));