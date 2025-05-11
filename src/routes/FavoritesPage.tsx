import React, {useEffect, useState} from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Book } from "../types/types";
import BookCard from "../components/BookCard/BookCard";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(()=> {

    const fetchFavoriteBooks = async () => {
      try {
        const booksData = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(`https://openlibrary.org/works/${id}.json`);
            if (!response.ok) return null;
            const data = await response.json();
            return {
              ...data,
              key: `/works/${id}`, 
            };
          })
        );
        setFavoriteBooks(booksData.filter((book) => book && book.key));
      } 
      catch (error) {
        console.error('Error fetching favorit böcker:', error);
      }
    };
    fetchFavoriteBooks();
  }, [favorites]);
  
  return (
    <div className="favorites-page">
      <h1>Favorite Books</h1>
      <div className="favorites-list">
        {favoriteBooks.length > 0 ? (
          favoriteBooks.map((book) => (
            <BookCard key={book.key} book={book} /> 
          ))
        ) : (
          <p>Inga favoriter ännu!</p> 
        )}
      </div>
    </div>
  );
};

  
export default FavoritesPage;