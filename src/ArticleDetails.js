import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './ArticleDetails.css';

const ArticleDetails = ({ article, toggleSections }) => {

  console.log(article)

  return (
    <article className="selected-article-details">
      <div className="article-info-container">
        <div className="selected-article-section">{article.section}</div>
        <div className="article-image-container">
          <img className="selected-article-image" src={article.multimedia[0].url} />
        </div>
        <h2 className="selected-article-title">{article.title}</h2>
        <h3 className="selected-article-abstract">{article.abstract}</h3>
        <div className="selected-article-author">{article.byline}</div>
        <h4 className="selected-article-link"><a href={article.url}>View Original Article</a></h4>
        <Link className="back-link" to="/" onClick={toggleSections}>🔙</Link>
      </div>
    </article>
  )
}

export default ArticleDetails;
