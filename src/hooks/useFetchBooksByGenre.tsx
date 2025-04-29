
import {Book} from '../types/types';
import {useFetch} from './usesFetch'; 

export const useBooksByGenre = (genre: string) => {
    const formattedGenre = genre.toLocaleLowerCase().replace(/\s+/g, '_'); 
    const url = `https://openlibrary.org/subjects/${formattedGenre}.json?limit=20`;
    const {data, loading} = useFetch(url);
    
    return {
        books: data?.works || [] as Book[],
        loading,
    };
};