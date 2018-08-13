import React from 'react';
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  climb () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <div className="test">
        <img className="image" src={require('../../assets/image/background.jpeg')} />
        <h1>{this.props.heading}</h1>
        <div onClick={this.climb.bind(this)}>
          <h2>{this.props.contents} {this.state.count}</h2>
        </div>
        <img className="svg-image" src="../../assets/svg/nodejs.svg"/>
      </div>
    )
  }
}