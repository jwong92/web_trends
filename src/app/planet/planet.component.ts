import { Component, OnInit } from '@angular/core';
// IMPORT YOUR CLASS/MODEL USING PATH TO FILE, NO SUFFIX
import {Planet} from '../planet';
import {Moon} from '../moon';
// IMPORT THE SERVICE
import {PlanetService} from '../planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
    title = 'Planets';
    year = new Date().getFullYear();
    // USING THIS CLASS INSIDE THE HTML
    // planet: Planet = {id: 1, name: 'Venus'};
    // moon: Moon = {id: 2, name: 'Moon'};

    // THE SET PLANET FUNCTION WILL SET THIS PLANET EQUAL TO WHATEVER WE CLICK ON
    planet: Planet;
    // INITIATE A PROPERTY AS AN ARRAY OF PLANET AND WAIT FOR SERVICE TO DEFINE THIS PROPERTY
    planets: Planet[];

    // p is an instance of the planet class, and setting the planet to p
    // CREATE A FUNCTION, AND MAKE SURE IT WORKS
    setPlanet(p: Planet) {
      this.planet = p;
    }

  // USE CONSTRUCTOR TO ASSIGN PROPERTIES
  constructor(
    // create a new property called planetService (implicit property) that is a instance of PlanetService
    private planetService: PlanetService
  ) { }

  // ON INIT FUNCTION THAT IS AUTO CREATED FOR YOU - THIS IS ESSENTIALLY THE PAGE LOAD - AKA ANGULAR ON INITIALIZE - WAITS FOR COMPONENT TO LOAD, THEN EXECUTES INSIDE PAGE LOAD
  ngOnInit() {
    this.planetService.getPlanets().subscribe(ps => this.planets = ps);
  }
}

