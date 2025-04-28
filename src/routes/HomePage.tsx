import GenreButtons from "../components/GenreButton/GenreButton";
import SearchBar from "../components/NavBar/SearchBar/SearchBar";
import "../styles/HomePage.scss";

const HomePage = () => {
    return (
      <div className="Title">
        <h1>Toasty Library</h1>
        <SearchBar/>
        <GenreButtons/>
      </div>
    );
  };
  
  export default HomePage;