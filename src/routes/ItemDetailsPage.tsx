import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description ? book.description.value || book.description : 'Ingen beskrivning.'}</p>
    </div>
  );
};
  
  export default ItemDetailsPage;