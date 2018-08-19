import React, {Component} from 'react';
import {connect} from 'react-redux';

import {count} from '../actions/test';

class User extends React.Component {
  handleButtonClick = () => {
    console.log('Counting Function was called');
    this.props.onCount();
  };

  render() {
    console.log(this.props.counting);
    return (
      <div>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

/* eslint no-console: 0 */
/* ES6 & 7 Feature Test */
const cal = async args => {
  const {a, b} = args;
  await console.log('1. Await');
  console.log('2. Async/Await Done');
  return a + b;
};

cal({a: 1, b: 2});
