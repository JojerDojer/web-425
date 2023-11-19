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
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

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

  // Constructor to inject the BooksService and MatDialog.
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Initialize the 'books' Observable with the list of books from the service.
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  // Method to display details of a specific book based on isbn.
  showBookDetails(isbn: string) {
    // Retrieve book details using the BooksService.
    this.book = this.booksService.getBook(isbn);

    // Open a dialog to display book details.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true, // Prevent closing the dialog by clicking outside or pressing esc key.
      width: '800px' // Set the width of the dialog.
    })

    // Subscribe to the dialog's afterClosed event.
    dialogRef.afterClosed().subscribe(result => {
      // Check if the result is 'confirm'.
      if (result === 'confirm') {
        // Reset the book variable when the dialog is confirmed.
        this.book === null;
      }
    });

    // Log the book details to the console.
    console.log(this.book);
  }
}
