import { Injectable } from '@angular/core';
// IMPORT YOUR CLASS/MODEL USING PATH TO FILE, NO SUFFIX
import { Planet } from './planet';

// A EXTERNAL REACTIVE JS PLUGIN
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  // CREATE AN ARRAY OF THE CLASS PLANET
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

  // WILL RETURN THE ABOVE ARRAY OF PLANETS
  getPlanets(): Observable<Planet[]> {
    return of(this.planets);
  }

  constructor() { }
}
