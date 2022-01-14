import React, { Component } from 'react';

const ArticleDetails = ({ article }) => {

  const testArticle = () => {
    console.log(article)
  }

  return (
    <article className="selected-article-details" onClick={testArticle}>
      <div className="selected-article-title">{article.title}</div>
    </article>
  )
}

export default ArticleDetails;
