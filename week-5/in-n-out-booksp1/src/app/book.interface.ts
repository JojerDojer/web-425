/**
 * Title: book.interface.ts
 * Author: John Davidson
 * Date: 19 November 2023
 * Description: Book interface object
 */

// Creates a book interface with properties for isbn, title, authors, description, and numOfPages.
export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}
