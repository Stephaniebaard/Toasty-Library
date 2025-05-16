import './SearchBar.scss';

import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import { Book } from '../../../types/types';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    if (query.length < 3) return; 

    const fetchBooks = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await response.json();
        setBooks(data.docs); 
      } catch (error) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]); 

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
              alt={book.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;