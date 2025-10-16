import { useFetch } from "../../hooks/usesFetch";
import { OpenLibraryResponse, } from "../../types/types";
import BookCard from "../BookCard/BookCard";
import BookCarousel from "../BookCarousel/BookCarousel";
import './GenreSection.scss';


interface GenreSectionProps {
  genre: string;
}

const GenreSection: React.FC<GenreSectionProps> = ({ genre }) => {
  const url = `https://openlibrary.org/subjects/${genre}.json?limit=10`;
  const { data, loading } = useFetch<OpenLibraryResponse>(url);
  console.log(loading, data);  // Felsökning
  

  if (loading) return <div>Loading {genre} books...</div>;
  if (!data || !data.works) return <div>No books found for {genre}</div>;

   return (
    <div className="genre-section">
      <h2>{genre.toUpperCase()}</h2>
      <BookCarousel
        items={data.works}
        renderItem={(book) => <BookCard key={book.key} book={book} />}
        itemsPerPage={5}
      />
    </div>
  );
};

export default GenreSection;