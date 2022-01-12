import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Fetches from './Fetches';
import ArticleDetails from './ArticleDetails';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
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
            <Routes>
              <Route exact path="/" element={<Fetches />}></Route>
              <Route exact path="/details" element={<ArticleDetails />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

// DETAILS VIEW:
  // Use "render={({ match })} => {(matchFunc)}" to find matching article info from articleList
    // (this will be determined by articleList.find()
    // Pass data into <ArticleDetails /> to render info for that specific article
    // Set state as that article, to be reset upon navigating back to the main page

// SORTING FUNCTION:
  // Create drop-down menu of categories
  // Refer to array of endpoints from API documentation upon selecting category
  // Re-render main page, fetching articles from that category only
