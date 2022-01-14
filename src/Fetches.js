import React, { Component, useState, useEffect } from 'react';
import CardContainer from './CardContainer';

class Fetches extends Component {

  componentDidMount = () => {
    this.props.getStoriesByCategory();
  }

  render(props) {
    return (
      <div>
        <CardContainer articleList={this.props.articleList} getDetails={this.props.getDetails} />
      </div>
    )
  }
}

export default Fetches;

// J8trxGQP5jbdBbCITZcGJspnNAQX3hmH
