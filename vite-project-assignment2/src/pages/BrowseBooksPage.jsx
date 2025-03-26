import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const allBooks = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books by category and search term (both case-insensitive)
  const filteredBooks = allBooks.filter(book => {
    const matchCategory = book.category.toLowerCase() === category.toLowerCase();
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="browse-page">
      <h1>Browse Books - {category}</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="books-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <li key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <Link to={`/book/${book.id}`} className="details-link">
                View Details
              </Link>
            </li>
          ))
        ) : (
          <p>No books found matching your search.</p>
        )}
      </ul>
    </div>
  );
};

export default BrowseBooksPage;
