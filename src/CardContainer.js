import React, { Component } from 'react';
import './CardContainer.css';
import NewsCard from './NewsCard.js';

const CardContainer = ({ articleList, getDetails }) => {

  const newsCards = articleList.map( article => {
    return (
      <NewsCard className="news-card" title={article.title} abstract={article.abstract} url={article.url} key={Math.random()} id={article.uri} getDetails={getDetails} articleList={articleList}/>
    )
  })

  return (
    <div className="news-cards-container">
      {newsCards}
    </div>
  )
}

export default CardContainer;

// image={article.multimedia[0].url}
