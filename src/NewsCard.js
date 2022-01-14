import React, { setState, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ title, image, abstract, url, id, getDetails }) => {

  return (
    <Link to={`/details/${id}`} onClick={getDetails}>
      <div className="article-container" id={id}>
        <article className="news-card" id={id}>
          <div className="article-title" id={id}><h3 id={id}>{title}</h3></div>
          <div className="article-abstract" id={id}>{abstract}</div>
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
