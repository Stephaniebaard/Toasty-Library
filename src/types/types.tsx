export type Book = {
    key: string;
    title: string;
    author_name?: string[];
    cover_id?: number;
    description?: string | { value: string };
  };

  export interface OpenLibraryResponse {
    works: Book[]; 
  }