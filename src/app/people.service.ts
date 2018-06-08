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
    new Person(1, "Bill", "Wright", new Date("01/01/1950")), 
    new Person(2, "Jessica", "Wong", new Date("02/15/1992")) 
  ]

    // array of persons inside the people array - these are typed to the model

  // calling the getPeople method will return the above array
  // Adding an optional parameter of a person object

  // This service can be used in many components
  getPeople(person?: Person): Observable<Person[]> {
    if(person) {
      //If there IS a person defined. If not, then it won't execute
      let results: Person[] = [];

      for(let p of this.people) {
        if(p.firstName.toLowerCase() === person.firstName.toLowerCase()) {
          results.push(p);
        }
        //return a selective list of people based on the parameter
      }
      // using of makes it look asynchronous - just for now
      return of(results);
    }
    return of(this.people);
  }

  constructor() { }
}
