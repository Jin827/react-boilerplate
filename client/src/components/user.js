import React from 'react';
import { connect } from 'react-redux';

import { count, apiRequest } from '../actions/example';
/* eslint no-console: 0 */
class User extends React.Component {
  handleButtonClick = async () => {
    await this.props.onCount();
    return this.props.onApiRequest();
  };

  render() {
    // let exam: string = 'LEE';
    // exam = 2;
    return (
      <div className="user-page">
        <h1>Welcome to User</h1>
        <h2>Counting: {this.props.counting}</h2>
        <button type="button" onClick={this.handleButtonClick}>
          Click
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counting: state.test.counting,
});

const mapDispatchToProps = dispatch => ({
  onCount: () => dispatch(count()),
  onApiRequest: () => dispatch(apiRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
