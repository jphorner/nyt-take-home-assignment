import React, { setState, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ title, image, abstract, url, id}) => {

  return (
    <Link to={`/details`}>
      <div className="article-container" id={id}>
        <article className="news-card">
          <div className="article-title"><h3>{title}</h3></div>
          <div className="article-abstract">{abstract}</div>
        </article>
      </div>
    </Link>
  )
}

export default NewsCard;

// <div className="image-container">
//   <div className="article-image"><img src={image}/></div>
// </div>


// <div className="article-url"><a href={url}>View Original Article</a></div>
//  <Link to={`/articles/place`}>
