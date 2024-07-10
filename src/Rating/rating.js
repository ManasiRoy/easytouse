import React, { useState } from "react";
import "./rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");
  const [error, setError] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setComment("");
    setSubmittedComment("");
    setError(null);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      setError("Please write something...");
    } else {
      setSubmittedComment(comment);
      console.log("Submitted Comment:", comment);
      setError(""); // Clear the error message after successful submission
      setComment("");
      setTimeout(() => {
        setSubmittedComment("");
      }, 3000);
    }
  };

  return (
    <div>
      <h2>Rate Us</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingChange(value)}
            className="ratingLi"
            style={{
              backgroundColor: rating === value ? "#555" : "#ccc",
              color: rating === value ? "#fff" : "#000",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      {rating > 0 && rating < 3 && (
        <div>
          <h3>We're sorry to hear that Rating is {rating}!</h3>
          <h3>
            Please leave a comment so we can do a better service next time.
          </h3>
          <form onSubmit={handleSubmit}>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              rows="2"
              cols="20"
              className={error ? "error" : ""}
            />
            <button type="submit">Submit</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error ? submittedComment && <p>Comment submitted</p> : ""}
        </div>
      )}
      {rating === 3 && (
        <div>
          <h3>We will try hard for a better rating from you.</h3>
        </div>
      )}
      {rating >= 3 && (
        <div>
          <h3>Thank you for giving us a Rating {rating}!</h3>
        </div>
      )}
    </div>
  );
};

export default Rating;
