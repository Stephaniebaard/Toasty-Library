import React, { useState } from "react";
import './GenreButton.scss';
import { useBooksByGenre } from "../../hooks/useFetchBooksByGenre";

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

<ul>
    {books.map((book) =>(
       <li key={book.key}>{book.title}</li> 
     ))}
</ul>     

        </div>
        
  
)};

export default BooksBrowser;