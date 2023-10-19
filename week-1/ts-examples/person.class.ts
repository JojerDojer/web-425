/**
 * Title: person.class.ts
 * Author: John Davidson
 * Date: 19 October 2023
 * Description: Person class
 */

// Import the Iperson interface.
import { Iperson } from "./person.interface";

// Create a new class named Person that implements the Iperson interface.
class Person implements Iperson {
    firstName: string;
    lastName: string;

    // Create a constructor to initialize a Person instance with first and last names.
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Create a new Person instance.
let myName = new Person("John", "Davidson");

// Print the outcome of the myName instance.
console.log(`My name is ${myName.firstName} ${myName.lastName}`)