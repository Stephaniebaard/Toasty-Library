import { useFetch } from "../../hooks/usesFetch";
import { OpenLibraryResponse, } from "../../types/types";
import BookCard from "../BookCard/BookCard";


interface GenreSectionProps {
  genre: string;
}

const GenreSection: React.FC<GenreSectionProps> = ({ genre }) => {
  const url = `https://openlibrary.org/subjects/${genre}.json?limit=6`;
  const { data, loading } = useFetch<OpenLibraryResponse>(url);
  console.log(loading, data);  // Felsökning
  

  if (loading) return <div>Loading {genre} books...</div>;
  if (!data || !data.works) return <div>No books found for {genre}</div>;

  return (
    <div>
      <h2>{genre.toUpperCase()}</h2>
      <div className="book-grid">
        {data.works.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default GenreSection;