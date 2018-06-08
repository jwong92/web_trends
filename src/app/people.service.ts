import { Injectable } from '@angular/core';
// import the person class
import {Person} from './person'
// rxjs - is reactive.js which allows you to asynchronously load
import {Observable, of} from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
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
