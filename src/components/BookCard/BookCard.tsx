import { Book } from "../../types/types";

interface BookCardProps {
    book: Book;  
  }
  
  const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const { title, author_name, cover_id } = book;
  
    const coverUrl = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : '';
  
    return (
      <div className="book-card">
        {coverUrl && <img src={coverUrl} alt={title} />}
        <h3>{title}</h3>
        {author_name && <p>By {author_name.join(', ')}</p>}
      </div>
    );
  };
  
  export default BookCard;