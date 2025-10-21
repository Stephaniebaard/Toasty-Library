import React, { createContext, useContext, useEffect, useState } from 'react';

type RatingsMap = Record<string, number>;

const RatingsContext = createContext<{
  ratings: RatingsMap;
  rateBook: (id: string, rating: number) => void;
  getRating: (id: string) => number | null;
}>({
  ratings: {},
  rateBook: () => {},
  getRating: () => null,
});

export const RatingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ratings, setRatings] = useState<RatingsMap>({});

  useEffect(() => {
    const raw = localStorage.getItem('bookRatings');
    if (raw) {
      try {
        setRatings(JSON.parse(raw));
      } catch {}
    }
  }, []);

  const persist = (next: RatingsMap) => {
    setRatings(next);
    localStorage.setItem('bookRatings', JSON.stringify(next));
  };

  const rateBook = (id: string, rating: number) => {
    if (!id) return;
    const next = { ...ratings, [id]: Math.max(1, Math.min(5, Math.round(rating))) };
    persist(next);
  };

  const getRating = (id: string) => {
    if (!id) return null;
    return ratings[id] ?? null;
  };

  return (
    <RatingsContext.Provider value={{ ratings, rateBook, getRating }}>
      {children}
    </RatingsContext.Provider>
  );
};

export const useRatings = () => useContext(RatingsContext);