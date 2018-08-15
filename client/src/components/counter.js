import React from 'react';
import MarkdownData from '../../../data/post.md';

const getBundle = () => {
  import(/* webpackChunkName: 'lodash' */ 'lodash')
    .then(() => console.log('imported'));
};
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  climb() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    /* JS COMMENT */
    return (
      <div className="test">
        <img className="image" src={require('../../assets/image/background.jpeg')} />
        <h1 onClick={getBundle}>{this.props.heading}</h1>
        <div onClick={this.climb.bind(this)}>
          <h2>
            {MarkdownData.title}
            {' '}
            {this.state.count}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
          />
        </div>
        <img className="svg-image" src={require('../../assets/svg/nodejs.svg')} />
      </div>
    );
  }
}
