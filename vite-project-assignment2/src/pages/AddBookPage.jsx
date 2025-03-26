import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: 'Fiction'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (
      !formData.rating ||
      isNaN(formData.rating) ||
      formData.rating < 0 ||
      formData.rating > 5
    )
      newErrors.rating = 'Rating must be between 0 and 5';
    return newErrors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    dispatch(addBook({ ...formData, id: Date.now(), rating: parseFloat(formData.rating) }));
    navigate(`/books/${formData.category}`);
  };

  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <span className="error-text">{errors.author}</span>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>
        <div className="form-group">
          <label>Rating (0-5)</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} step="0.1" />
          {errors.rating && <span className="error-text">{errors.rating}</span>}
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Biography">Biography</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
