# Lab 5

## Part 1: Model
Construct person class/model `ng generate class [name]`
* This will be made in the app directory
```
id: number
firstName: string
lastName: string
dateOfBirth: Date
```
A single file is produced when making a class, which doesn't create too many conflicts in git, as it just adds files to the project

* Typescript doesn't want methods in their models

## Part 2: Services
Construct a service for the people class `ng generate service [name]`
* Like models, services are made with new files without altering existing files
    * Service will manage a list of people based on the Person object
    * Define new methods to return the array containing the Person objects
    * Don't forget to include the reactive.js library to allow for asynchronous loading
```
import {Person} from './person'
import {Observable, of} from 'rxjs'
export class PeopleService {

  people: Person[] = [
    // array of persons inside the people array - these are typed to the model
    {id: 1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('01/01/1950')},
    {id: 2, firstName: 'Bernie', lastName: 'Monette', dateOfBirth: new Date('01/01/1955')},
    {id: 3, firstName: 'Sean', lastName: 'Doyle', dateOfBirth: new Date('01/01/1970')}
  ];

  // calling the getPeople method will return the above array
  getPeople(): Observable<Person[]> {
    return of(this.people);
  }

  constructor() { }
}
```