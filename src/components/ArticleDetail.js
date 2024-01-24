// src/components/ArticleDetail.js

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './articledetail.css';

const ArticleDetail = ({ newsData }) => {
  const { articleId } = useParams();
  const location = useLocation();
  const summary = new URLSearchParams(location.search).get('summary');

  const article = newsData.find((article) => article.id.toString() === articleId);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="articledetail-container">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} className="articledetail-img" />
      <p className="articledetail-summary">{summary}</p>
    </div>
  );
};

export default ArticleDetail;
