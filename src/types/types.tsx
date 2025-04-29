export type Book = {
    key: string;
    title: string;
    author_name?: string[];
    cover_id?: number;
  };

  export interface OpenLibraryResponse {
    works: Book[]; 
  }