# Angular 2 - Notes

1. Create a new project with

```
ng new name
```

2. Serve it so that you can keep real time track of compilation time
```
ng serve --open OR
ng serve -o
```

3. Create a new component inside your app
`ng generate component [name_of_component]`

* Now, within the new components, you can define classes and create properties using typescript in the [new_component].component.ts file. Then, using the [new_component].component.html, you can serve the information.
* Use `{{}}` to use the properties defined in the component typescript class
* Now, within the app.component.html, you can include the new component, by adding the selector as a tag within the global app.component.html.
* app.component.html is like a global view, and we are adding partial views within it
* Add a component view by using the selector name and adding like this `<app-planet></app-planet>` where planet is the name of the new app component.
* Components aren't necessarily controllers, and so you shouldn't define classes within them

4. Models should be defined globally, and creates a new file in typescript that initializes a class definition outside of the new component, but still inside app
`ng generate class [name_of_class]`

* Has an export keyword and we know it is a module - export to other places to use
* Will standardize class name to a capital first letter
* This is where all your classes should be defined

5. In your component, import the class/model
`import {Planet} from '../planet';`

* Use the import keyword to import the class that you want (specify the class within the curly braces)
* Then specify the path without the .ts suffix


6. In your component, add an array for your class
```
    planets: Planet[] = [
      {id: 1, name: 'Mercury'},
      {id: 2, name: 'Venus'},
      {id: 3, name: 'Mars'},
      {id: 4, name: 'Earth'},
      {id: 5, name: 'Jupiter'},
      {id: 6, name: 'Saturn'},
      {id: 7, name: 'Uranus'},
      {id: 8, name: 'Neptune'},
      {id: 9, name: 'Uranus'},
    ];
```

7. In your componenet display the array by using a foreach loop `*ngFor='let p of planets'` to display the id and names of planets
```
<div id="planets">
  <ol>
    <li *ngFor="let p of planets" id="{{p.id}}" (click)="setPlanet(p)">{{p.name}}</li>
  </ol>
</div>
```
* We also defined a click event listener which will run the setPlanet function in the component. We also pass it the arguement of 'p' which is the selected planet.

8. In our ts component, we define a new property called planet and a new function called setPlanet
```setPlanet function for planet property
    planet: Planet;

    setPlanet(p: Planet) {
      this.planet = p;
    }
```
* Here, we say that setPlanet will take in a parameter p (which is of type Planet - which is a class, that has id and name), and assign the planet property inside the component to this parameter p.

9. In the component html, you'll have a piece of code to display this with 

```
<div *ngIf="planet" id="{{planet.id}}">id: {{planet.id}} name: {{planet.name}}</div>
```
* `*ngIf="planet"` determines whether the rest of the page can be redered - if something is not defined, will continue to load the rest of the page. Waiting for a true statement - once it evaluates to true, then it will display the result

10. Adding a new class - in this case, we call the class "selected" and you make it equal to when p equated the planet (aka when the selected planet is equal to the ) 
```
<div id="planets">
  <ol>
    <li *ngFor="let p of planets" 
    id="{{p.id}}" 
    (click)="setPlanet(p)"
    [class.selected]="p === planet">
    {{p.name}}</li>
  </ol>
</div>
```

### Services
1. `ng generate service [name_of_service]` will create a service spec and service in ts.

2. Services are for asynchronous loading of data - where we would put live data, or data that we want to manipulate in real time

3. It will create a class with the name of the service. Within in, add the data that you'll want to pull real time
    * In this case, we add this code:
    ```
    import { Planet } from './planet';
    import {Observable, of} from 'rxjs';

    planets: Planet[] = [
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Venus' },
        { id: 3, name: 'Mars' },
        { id: 4, name: 'Earth' },
        { id: 5, name: 'Jupiter' },
        { id: 6, name: 'Saturn' },
        { id: 7, name: 'Uranus' },
        { id: 8, name: 'Neptune' },
        { id: 9, name: 'Uranus' },
    ];

    getPlanets(): Observable<Planet[]> {
        return of(this.planets);
    }
    ```
    * Here, we import the class/model plants, and also we import the observable, which is what helps with the asynchronous calling when something isn't in the same file. Observable is meant for live data. when the data is ready it will load.

4. Now, in the component, we remove the array of Planet, and we create a new instance in planet.component.
`planets: Planet[];`

5. In the constructor, you declare a new private property, and it is typed to the service name
`constructor (private planetService: PlanetService) {}`

6. Now, we initialize the getPlanets function from the service with the ngOnInit function that was pre-created for us.

```
  ngOnInit() {
    this.planetService.getPlanets().subscribe(ps => this.planets = ps);
  }
```
* Here, on load of the page, initialize the class function and then use the subscribe to initialize the planets property with the results of the getPlanet function
```
  ngOnInit() {
    this.planetService.getPlanets().subscribe(ps => this.planets = ps);
  }
```

### Cloning The Project
* If you clone the project to another directory, you'll get errors
* First, run `$ npm install` to install all necessary components
* Run `$ npm audit fix` and will show you what needs to be fixed
* Run `ng server -o` again to run it