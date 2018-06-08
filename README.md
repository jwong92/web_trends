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

## Part 3: Components
Making edits to existing files - this can incurr conflicts
* When making changes to existing files, it is a good idea to make a branch of that file when making the changes
* `git branch [branch name]`
* `ng generate component [name]`
    * This component now will be on the new branch, and not in the previous project
* Serve the project, and now you can import the new component into the app component
    * In the componenet, you'll find the tag needed to import the page. Looks something like `<app-guestlist></app-guestlist>`
* Inject service into the component
* We want to do most of the edits into the components
* "Inject" the service and its contents by importing it as you would import a class
    * Import the service in the component with `import {PeopleService} from '../people.service';`
    * Import the class because the service uses the people class `import {Person} from '../person';`

Be careful about defining something. In the app component, if you define a new array, you have to initialize it by setting it equal to an actul array or empty array
* ` guests: Person[];` will render as undefined
* ` guests: Person[] = [];` will render as empty
* Using the below code, we determine if guests exists or not
```
<div *ngIf="guests">
guests is defined
</div>
```

* The component constructor can accept many service parameters
    * `constructor(private peopleService: PeopleService) { }`
    * You would just need to import the other services and clases

* When the component loads, there is a built in function in the app componenet that is run called
    * `ngOnInit() {}`

## Part 4: User Interactivity

### Using Input
Can define and import your own modules in angular. One is called forms.
* In the app.module.ts, import the form module `import {FormsModule} from '@angular/forms';` and add it to the imports
    * Order of the imports does matter - BrowserModule needs to be imported first
* Can now bind the user input to a model
    * Initialize a new instance of People `guestSearch: Person = new Person();`
    * Give the guestSearch a new name `this.guestSearch.firstName = "Jessica";`
    * `[(ngModel)] = 'model.property'`
