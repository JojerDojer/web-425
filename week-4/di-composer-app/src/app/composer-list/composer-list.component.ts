/**
 * Title: composer-list.component.ts
 * Author: John Davidson
 * Date: 10 November 2023
 * Description: Composer component
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface'; // Import IComposer.
import { ComposerService } from '../composer.service'; // Import ComposerService.



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Array to hold composer objects.
  composers: Array<IComposer>;

  // Injects the composerService as a dependency.
  constructor(private composerService: ComposerService) {
    // Fetch an array of composer objects.
    this.composers = this.composerService.getComposers();

  }

  ngOnInit(): void {
  }

}
