// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Forum from './components/Forum';
import Signup from './components/Signup';
import ReviewForm from './components/ReviewForm';
import ArticleDetail from './components/ArticleDetail';
import { newsData } from './components/Home';  // import newsData
import Footer from './components/Footer';
import Header from  './components/Header';
import News from './components/News';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]); // Added reviews state

  const handleLogin = (username, password) => {
    // Your authentication logic here
    // For simplicity, just set loggedIn to true
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    // Your logout logic here
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const checkLoggedInState = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    setLoggedIn(!!isLoggedIn);
  };

  useEffect(() => {
    checkLoggedInState();
  }, []); // This effect runs only once on component mount

  const handleSignup = (username, password) => {
    // For demonstration purposes, simulate authentication using stored credentials
    const storedUsername = localStorage.getItem('demoUsername');
    const storedPassword = localStorage.getItem('demoPassword');

    console.log('Entered username:', username);

    if (username === storedUsername && password === storedPassword) {
      setLoggedIn(true);
    } else {
      // Handle authentication failure
      console.log('Authentication failed');
    }
  };

  // Dummy function, replace with your actual review submission logic
  const handleReviewSubmit = (review) => {
    console.log('Review submitted:', review);
    setReviews([...reviews, review]);
  };
  
  return (
  <Router>
    <div>
          <Header />
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
           <Route
          path="/"
          element={<Home reviews={reviews} loggedIn={loggedIn} onReviewSubmit={handleReviewSubmit} />}
        />
              <Route
          path="/reviews"
          element={<Reviews reviews={reviews} loggedIn={loggedIn} onReviewSubmit={handleReviewSubmit} />}
        />
          <Route path="/news" element={<News newsData={newsData} />} />
        <Route path="/article/:articleId" element={<ArticleDetail newsData={newsData} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        {loggedIn && (
          <Route
            path="/write-review"
            element={<ReviewForm onSubmit={handleReviewSubmit} />}
          />
        )}
      </Routes>
        <Footer /> {/* Include the Footer component at the end of the layout */}
    </div>
  </Router>
);
        };

export default App;
