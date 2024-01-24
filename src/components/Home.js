// src/components/Home.js
import React from 'react';
import Reviews from './Reviews';
import NewsArticle from './NewsArticle';
import { Link } from 'react-router-dom';
import './NewsArticle.css';

export const newsData = [
  {
    id: 1,
    title: 'Breaking News 1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placekitten.com/400/300',
  },
  {
    id: 2,
    title: 'Breaking News 2',
    summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://placekitten.com/400/301',
  },
  {
    id: 3,
    title: 'Breaking News 3',
    summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://placekitten.com/400/301',
  },
  // Add more news articles as needed
];

const Home = ({ reviews, loggedIn, onReviewSubmit }) => {
  return (
    <div>
      {/* Display news articles */}
      <h2>Welcome to the Home Page</h2>

      <div className="news-container">
        {newsData.map((article) => (
          <div className="news-article" key={article.id}>
            <Link to={`/article/${article.id}?summary=${encodeURIComponent(article.summary)}`}>
              <NewsArticle article={article} />
            </Link>
          </div>
        ))}
      </div>

      {/* Display reviews here */}
      <Reviews reviews={reviews} loggedIn={loggedIn} onReviewSubmit={onReviewSubmit} showDetails={true} showForm={false} />
    </div>
  );
};

export default Home;