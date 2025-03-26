import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.books.find(b => b.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <h3>By {book.author}</h3>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/books/${book.category}`} className="back-link">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetailsPage;
