import React, { Component } from 'react';
import './Sections.css';

const Sections = ({setSection}) => {

  const sections = [
    'arts', 'automobiles', 'books', 'business',
    'fashion', 'food', 'health', 'home', 'insider',
    'magazine', 'movies', 'nyregion', 'obituaries',
    'opinion', 'politics', 'realestate', 'science',
    'sports', 'sundayreview', 'technology', 'theater',
    't-magazine', 'travel', 'upshot', 'us', 'world'
  ];

  const showSections = sections.map( section => {
    return (
      <button className='section-option' id={section} onClick={setSection} key={section}>{section}</button>
    )
  })

  return (
    <div className="sections-container" key='sections-container'>
      <section className="sections-list" key='sections-list'>
        {showSections}
      </section>
    </div>
  )
}

export default Sections;
