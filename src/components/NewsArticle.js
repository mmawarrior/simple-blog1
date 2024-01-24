// src/components/NewsArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NewsArticle.css'; // Create this file for styling

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <Link to={`/article/${article.id}`}>Read more</Link>
    </div>
  );
};

export default NewsArticle;
