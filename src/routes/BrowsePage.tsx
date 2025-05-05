import "../styles/BrowsePage.scss"
import GenreSection from "../components/GenreSection/GenreSection";
import SearchBar from "../components/NavBar/SearchBar/SearchBar";

const genres = [
  { name: "Love", genre: "love" },
  { name: "Fantasy", genre: "fantasy" },
  { name: "Science Fiction", genre: "science_fiction" },
  { name: "Mystery", genre: "mystery" },
];

const BrowsePage = () => {
  return (
    <div className="browse-page">
      <div className="search-bar-wrapper">
    <SearchBar />
      </div>
      <h1>Browse by Genre</h1>
      <div className="book-list">
        {genres.map((genre) => (
          <div key={genre.name}>
            <GenreSection genre={genre.genre} />
          </div>
        ))}
      </div>
      </div>
  );
};

export default BrowsePage;
