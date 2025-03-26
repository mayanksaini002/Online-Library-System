import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'The Silent Sea', author: 'John Doe', description: 'A mysterious journey in the cosmos.', rating: 4.5, category: 'Sci-Fi' },
    { id: 2, title: 'Mysteries Unfold', author: 'Jane Smith', description: 'A thrilling tale of secrets and suspense.', rating: 4, category: 'Fiction' },
    { id: 3, title: 'Life Tales', author: 'Mark Twain', description: 'Heartwarming stories of life and adventure.', rating: 3.5, category: 'Biography' },
    { id: 4, title: 'Stars Beyond', author: 'Albert Newton', description: 'Exploring the universe and its mysteries.', rating: 4.2, category: 'Sci-Fi' },
    { id: 5, title: 'Future Chronicles', author: 'Emily Carter', description: 'A futuristic vision of human civilization.', rating: 4.0, category: 'Sci-Fi' },
    { id: 6, title: 'The Last Kingdom', author: 'George Martin', description: 'An epic tale of power, betrayal, and legacy.', rating: 4.8, category: 'Fiction' },
    { id: 7, title: 'Memoirs of a Wanderer', author: 'Lisa Ray', description: 'A journey across the unknown.', rating: 3.9, category: 'Biography' },
    { id: 8, title: 'Knowledge Quest', author: 'Sarah Lee', description: 'Unraveling the mysteries of history.', rating: 4.3, category: 'Non-Fiction' },
    { id: 9, title: 'Enchanted Tales', author: 'Helen Brown', description: 'A collection of magical stories and folklore.', rating: 4.1, category: 'Fiction' },
    { id: 10, title: 'Science Wonders', author: 'David Kim', description: 'Insights into the world of science and discovery.', rating: 4.7, category: 'Non-Fiction' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
