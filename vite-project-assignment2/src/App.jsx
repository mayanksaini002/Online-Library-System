import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:category" element={<BrowseBooksPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
