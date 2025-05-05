import React, { useState } from "react";
import './BookSection.scss';
import { Book } from "../../types/types"; 

interface BookSectionProps {
  books: Book[]; 
}

const BookSection: React.FC<BookSectionProps> = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < books.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="book-section">
      <button className="arrow left" onClick={goToPrevious}>
        &#8592; {/* Vänsterpil */}
      </button>

      <div className="book-grid">
        {books.slice(currentIndex, currentIndex + 3).map((book) => {
       
          const coverUrl = book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
            : '';

          const authors = book.author_name ? book.author_name.join(", ") : "Unknown Author";

          return (
            <div key={book.key} className="book-card">
              {coverUrl && <img src={coverUrl} alt={book.title} />}
              <h3>{book.title}</h3>
              <p>{authors}</p>
            </div>
          );
        })}
      </div>

      <button className="arrow right" onClick={goToNext}>
        &#8594; {/* Högerpil */}
      </button>
    </div>
  );
};

export default BookSection;
