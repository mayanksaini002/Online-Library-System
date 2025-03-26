import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];
  const popularBooks = [
    { id: 1, title: 'The Silent Sea', category: 'Sci-Fi' },
    { id: 2, title: 'Mysteries Unfold', category: 'Fiction' },
    { id: 3, title: 'Life Tales', category: 'Biography' },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Mayank's Library</h1>
        <p>Your gateway to a universe of knowledge and imagination.</p>
      </section>
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="cards-grid">
          {categories.map((cat, index) => (
            <Link key={index} to={`/books/${cat}`} className="card category-card">
              <h3>{cat}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section className="popular-books">
        <h2>Popular Books</h2>
        <div className="cards-grid">
          {popularBooks.map(book => (
            <div key={book.id} className="card book-card">
              <h3>{book.title}</h3>
              <p>{book.category}</p>
              <Link to={`/book/${book.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
