import { Book } from "../../types/types";
import {Link} from 'react-router-dom';
import './BookCard.scss';
import { useFavorites } from '../../context/FavoritesContext';
import ToastImg from '../../images/Toast.png';

interface BookCardProps {
    book: Book;  
  }
  
  const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const { title, author_name, cover_id, key } = book;
    const id = key?.split('/').pop();
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(id || '');
    console.log('isFavorite:', isFavorite);
    const coverUrl = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : '';
  
    const handleFavoriteClick = (e: React.MouseEvent) => {
      e.preventDefault(); 
      e.stopPropagation(); 
      console.log("Favorite button clicked!");
      toggleFavorite(id || '');
    };
  
    return (
      <div className="book-card">
      <div className="cover-wrapper">
        <Link to={`/book/${id}`}>
          <img src={coverUrl} alt={title} className="book-cover" />
        </Link>

        <img
          src={ToastImg}
          alt="favorite"
          className={`favorite-toast ${isFavorite ? 'active' : 'inactive'}`}
          onClick={handleFavoriteClick}
        />
      </div>

      <h3>{title}</h3>
      {author_name && <p>By {author_name.join(', ')}</p>}
    </div>
     );
  };
  
  export default BookCard;