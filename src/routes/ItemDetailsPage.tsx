import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ToastImg from '../images/Toast.png';
import '../styles/ItemDetailsPage.scss';

const ItemDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);
  const [authors, setAuthors] = useState<string[]>([]);
  const { favorites, toggleFavorite } = useFavorites();

 const handleFavoriteClick = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (id) toggleFavorite(id);
};

  useEffect(() => {
    if (!id) return;
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(res => res.json())
      .then(async data => {
        setBook(data);

        // fetch author names if present
        const authorRefs = data?.authors ?? [];
        if (authorRefs.length) {
          const names = await Promise.all(
            authorRefs.map(async (a: any) => {
              try {
                const key = a?.author?.key;
                if (!key) return '';
                const res = await fetch(`https://openlibrary.org${key}.json`);
                const ad = await res.json();
                return ad?.name ?? '';
              } catch {
                return '';
              }
            })
          );
          setAuthors(names.filter(Boolean));
        }
      })
      .catch(() => setBook(null));
  }, [id]);

  if (!book) return <div className="item-details-loading">Loading...</div>;

  const coverId = book?.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : '/src/images/ToastLogo.png';

  const description =
    typeof book.description === 'string'
      ? book.description
      : book.description?.value ?? 'Ingen beskrivning.';

  const isFav = id ? favorites.includes(id) : false;

  return (
    <div className="item-details">
      <div className="item-left">
        <div className="cover-wrapper">
          <img src={coverUrl} alt={book.title} className="cover" />
        +          <img
           src={ToastImg}
            alt={isFav ? 'Remove favorite' : 'Add favorite'}
            className={`favorite-toast ${isFav ? 'active' : 'inactive'}`}
            onClick={handleFavoriteClick}
          />
        </div>

        <div className="meta">
          <h2 className="title">{book.title}</h2>
          {authors.length > 0 && <p className="author">By: {authors.join(', ')}</p>}
          {book.subjects && (
            <p className="genres">Genres: {book.subjects.slice(0, 5).join(', ')}</p>
          )}
        </div>
      </div>

      <div className="item-right">
        <h3>Description</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ItemDetailsPage;