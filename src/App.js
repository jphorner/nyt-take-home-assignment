import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Sections from './Sections';
import Fetches from './Fetches';
import ArticleDetails from './ArticleDetails';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      currentArticle: '',
      articlesSet: false,
      section: '',
    }
  }

  getArticleList = () => {
    if (!this.state.articlesSet) {
      console.log('ARTICLES FETCHED')
      fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=J8trxGQP5jbdBbCITZcGJspnNAQX3hmH')
        .then(response => response.json())
        .then(data => this.setState({ articles: data.results }))
        .then(() => this.setState({ articlesSet: true }))
    } else {
      fetch(`https://api.nytimes.com/svc/topstories/v2/${this.state.section}.json?api-key=J8trxGQP5jbdBbCITZcGJspnNAQX3hmH`)
        .then(response => response.json())
        .then(data => this.setState({ articles: data.results }))
        .then(() => this.setState({ articlesSet: true }))
      return;
    }
  }

  getArticleDetails = (event) => {
    let articleList = this.state.articles;
    console.log(event.target.id);
    let selectedArticle = articleList.find( article => article.uri === event.target.id);
    this.setState({ currentArticle: selectedArticle })
  }

  // setSection = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.id)
  // }

  getArticlesBySection = (event) => {
    event.preventDefault();
    this.setState({ section: event.target.id });
    this.setState({ articlesSet: 'false' }, () => {
      this.getArticleList();
    })
  }

  render() {
    return (
      <div className="App">
        <div className="content-container">
          <header className="App-header">
            <div className="header-text">
              <h1 className="site-title">It's News, Alright!</h1>
              <h3 className="site-slogan">Top stories at a glance - without all of the clutter.</h3>
            </div>
          </header>
          <main>
            <Sections setSection={this.getArticlesBySection} />
            <Routes>
              <Route exact path="/" element={<Fetches getDetails={this.getArticleDetails} getStoriesByCategory={this.getArticleList} articleList={this.state.articles} articlesSet={this.state.articlesSet} switchSection={this.getArticlesBySection}/>}></Route>
              <Route exact path="/details" element={<ArticleDetails article={this.state.currentArticle}/>}></Route>
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

// MAKE PROJECT BOARD
// MAKE WIREFRAME

// DETAILS VIEW:
  // Use "render={({ match })} => {(matchFunc)}" to find matching article info from articleList
    // (this will be determined by articleList.find()
    // Pass data into <ArticleDetails /> to render info for that specific article
    // Set state as that article, to be reset upon navigating back to the main page

// SORTING FUNCTION:
  // Create drop-down menu of categories
  // Refer to array of endpoints from API documentation upon selecting category
  // Re-render main page, fetching articles from that category only
