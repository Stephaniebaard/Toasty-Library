import SearchBar from "../components/NavBar/SearchBar/SearchBar";
import "../styles/HomePage.scss";

const HomePage = () => {
    return (
      <div className="Title">
        <h1>Toasty Library</h1>
        <SearchBar/>
      </div>
    );
  };
  
  export default HomePage;