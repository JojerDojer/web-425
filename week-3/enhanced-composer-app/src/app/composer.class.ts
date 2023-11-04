/**
 * Title: composer.class.ts
 * Author: John Davidson
 * Date: 2 November 2023
 * Description: Class file for the Composer object
 */

import { IComposer } from './composer.interface'


export class Composer {
  composers: Array<IComposer>;


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Richard Wagner", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Claude Debussy", genre: "Classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers)
      if (composer.composerId === composerId) {
        return composer;
      }
  }
}
