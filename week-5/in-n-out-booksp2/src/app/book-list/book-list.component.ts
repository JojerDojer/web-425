/**
 * Title: book-list.component.ts
 * Author: John Davidson
 * Date: 19 November 2023
 * Description: Book-list component
 */

// Import necessary modules and services.
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  // Observable to hold list of books
  books: Observable<IBook[]>;
  // Header array for the book list table.
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  // Variable to store details of a specific book.
  book: IBook;

  // Constructor to inject the BooksService.
  constructor(private booksService: BooksService) {
    // Initialize the 'books' Observable with the list of books from the service.
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  // Method to display details of a specific book based on isbn.
  showBookDetails(isbn: string) {
    // Retrieve book details using the BooksService.
    this.book = this.booksService.getBook(isbn);
    // Log the book details to the console.
    console.log(this.book);
  }
}
