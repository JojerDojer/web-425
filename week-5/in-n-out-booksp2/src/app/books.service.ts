/**
 * Title: books.service.ts
 * Author: John Davidson
 * Date: 19 November 2023
 * Description: Books service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Initialize an array of IBook properties.
  books: Array<IBook>;

  // Creates an array of my favorite books.
  constructor() {
    this.books = [
      {
        isbn: '0765365278',
        title: 'The Way of Kings',
        description: 'The first volume of the Stormlight Archives',
        numOfPages: 1280,
        authors: ['Brandon Sanderson']
      },
      {
        isbn: '0765365286',
        title: 'Words of Radiance',
        description: 'The first volume of the Stormlight Archives',
        numOfPages: 1328,
        authors: ['Brandon Sanderson']
      },
      {
        isbn: '0765365294',
        title: 'Oathbringer',
        description: 'The second volume of the Stormlight Archives',
        numOfPages: 1328,
        authors: ['Brandon Sanderson']
      },
      {
        isbn: '0765365308',
        title: 'Rhythm of War',
        description: 'The third volume of the Stormlight Archives',
        numOfPages: 1296,
        authors: ['Brandon Sanderson']
      },
      {
        isbn: '1443434973',
        title: '1984',
        description: 'A dystopian era novel exploring a totalitarian society dominated by surveillance, propaganda, and fear.',
        numOfPages: 416,
        authors: ['George Orwell']
      },
    ]
  }

  // Returns the entire array of books.
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Returns the isbn of a specified book.
  getBook(isbn: string): IBook {
    // Loop through books.
    for (let book of this.books) {
      // If isbn matches the isbn of the parameter, return that book.
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
