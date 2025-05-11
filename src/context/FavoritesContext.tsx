import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext<{
  favorites: string[];
  toggleFavorite: (id: string) => void;
}>({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter((favorite) => favorite !== id)
        : [...prevFavorites, id];
      
      console.log('Updated favorites:', newFavorites); 
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
