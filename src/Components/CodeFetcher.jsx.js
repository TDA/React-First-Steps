import React, { Component } from 'react';

class CodeFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `./Components/${this.props.componentName}.jsx.js`,
      code: ''
    };
  }

  componentDidMount() {
    console.log("im trying here" + this.state.url);
    fetch(this.state.url, {
      method: 'GET'
    }).then((response) => response.text())
      .then((response) => this.setState({ code: response }))
  }

  render() {
    return (
      <figure>
        <figcaption>{this.state.url}</figcaption>
        <pre>
          <code>
            {this.state.code.toString()}
          </code>
        </pre>
      </figure>
    )
  }
}

module.exports = {
  CodeFetcher: CodeFetcher
};