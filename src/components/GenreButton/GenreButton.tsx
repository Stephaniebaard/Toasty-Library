import React from "react";
import './GenreButton.scss';

const GenreButtons: React.FC = () => {
    return (
        <div className="button-container">
            <button className="romantic-button">Romantic</button>
            <button className="horror-button">Horror</button>
            <button className="fantasy-button">Fantasy</button>
            <button className="thriller-button">Thriller</button>
            <button className="science-fiction-button">Science Fiction</button>
        </div>
    );
};

export default GenreButtons;