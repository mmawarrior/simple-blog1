// src/components/Reviews.js
import React, { useState } from 'react';
import './Reviews.css';

const Reviews = ({ reviews, loggedIn, onReviewSubmit, showDetails = true, showForm = true }) => {
  const [newReview, setNewReview] = useState({ title: '', content: '', image: null });
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setNewReview({ ...newReview, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass the new review data and image file to the parent component for submission
    onReviewSubmit({ ...newReview, imageFile });
    
    // Clear the form fields after submission
    setNewReview({ title: '', content: '', image: null });
    setImageFile(null);
  };
// Add a common class for styling consistency
const ReviewItem = ({ review, showDetails, index }) => (
  <div className="review-item" key={index}>
    <h3>{showDetails && review.title}</h3>
    <p>{review.content}</p>
    {showDetails && <img src={review.image} alt={`Review ${index}`} />}
  </div>
);

// In your Reviews component:
return (
  <div className={`reviews-section ${loggedIn ? 'active' : 'hidden'}`}>
    <h2>Reviews Section</h2>

    {/* Review submission form */}
    {loggedIn && showForm && (
      <form onSubmit={handleSubmit}>
        {showDetails && (
          <>
            <label>
              Title:
              <input type="text" name="title" value={newReview.title} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          </>
        )}
        <br />
        <label>
          Content:
          <textarea name="content" value={newReview.content} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    )}

    {/* Display user reviews here */}
    {reviews.map((review, index) => (
      <ReviewItem key={index} review={review} showDetails={showDetails} index={index} />
    ))}
  </div>
);
 };

export default Reviews;
