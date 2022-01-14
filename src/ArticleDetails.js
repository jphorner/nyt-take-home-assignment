import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ArticleDetails = ({ article }) => {

  const testArticle = () => {
    console.log(article)
  }

  return (
    <article className="selected-article-details" onClick={testArticle}>
      <div className="article-info-container">
        <div className="selected-article-section">{article.section}</div>
        <h2 className="selected-article-title">{article.title}</h2>
        <h3 className="selected-article-abstract">{article.abstract}</h3>
        <h4 className="selected-article-author">{article.byline}</h4>
        <h4 className="selected-article-link"><a href={article.url}>View Original Article</a></h4>
        <Link className="back-link" to="/">Back</Link>
      </div>
    </article>
  )
}

export default ArticleDetails;
