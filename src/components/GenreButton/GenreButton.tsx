import React, { useState } from "react";
import './GenreButton.scss';
import { useBooksByGenre } from "../../hooks/useFetchBooksByGenre";
import BookCard from "../BookCard/BookCard";
import Carousel from "../BookCarousel/BookCarousel";

const BooksBrowser = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const {books, loading} = useBooksByGenre(selectedGenre);
    const handleGenreClick = (genre: string)=> {
        setSelectedGenre(genre);
    };

    return (
        <div className="button-container">
      <button onClick={() => handleGenreClick("Romantic")} className="romantic-button">Romantic</button>
      <button onClick={() => handleGenreClick("Horror")} className="horror-button">Horror</button>
      <button onClick={() => handleGenreClick("Fantasy")} className="fantasy-button">Fantasy</button>
      <button onClick={() => handleGenreClick("Thriller")} className="thriller-button">Thriller</button>
      <button onClick={() => handleGenreClick("Science Fiction")} className="science-fiction-button">Science Fiction</button>

      {loading && <p>Loading books...</p>}
      
          <Carousel items={books} itemsPerPage={3} renderItem={(book) => (
          <BookCard key={book.key} book={book} />
      )} />

        </div>
        
  
)};

export default BooksBrowser;