import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../people.service';
import {Person} from '../person';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {
  // Create a new instance of person - an empty object
  guestSearch: Person = new Person();
  guests: Person[];

  findPeople(personQuery: Person): void{
    // Take in a person object and pass it to the service
    console.log("Search button clicked");
    this.peopleService.getPeople(personQuery).subscribe(results => this.guests = results);
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    // results is the single result that you get back (might be an object or array, but it is only one result)
    // when the componenet loads, use the service to get people, and subscribe the results of that call, and send them to the undefined variable guests (if this is successful, guests should be a defined variable with 3 items in the array)

    //when the page loads, then load the array
    //Use the declared instance of the service and its methods to retrieve the contents of the service as defined in the services definition
    this.peopleService.getPeople().subscribe(results => this.guests = results);
    this.guestSearch.firstName = "Jessica";
  }

}
