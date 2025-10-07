import GenreButtons from "../components/GenreButton/GenreButton";
import SearchBar from "../components/NavBar/SearchBar/SearchBar";
import "../styles/HomePage.scss";

const HomePage = () => {
    return (
      <div className="home-page">
        <div className="left-block">
        <h1>Toasty Library</h1>
        <SearchBar/>
        </div>
       <div className="genre-buttons">
        <GenreButtons/>
        </div>
      </div>
    );
  };
  
  export default HomePage;