import React, { Component, useState, useEffect } from 'react';
import CardContainer from './CardContainer';

class Fetches extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=J8trxGQP5jbdBbCITZcGJspnNAQX3hmH')
      .then(response => response.json())
      .then(data => this.setState({ articles: data.results }))
  }

  render() {
    return (
      <div>
        <CardContainer articleList={this.state.articles} />
      </div>
    )
  }
}

export default Fetches;

// J8trxGQP5jbdBbCITZcGJspnNAQX3hmH
