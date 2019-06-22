import { Injectable } from '@angular/core';
import { Station } from './models/station';

@Injectable({
  providedIn: 'root'
})

export class APIRepository {

  public Station : Station;

  API_URL  =  '../api/';
  
  constructor() {}
  
   
  listStations(): any{
    //list Stations on firebase
  }

  addStation(Station: Station): any{
    //add Stations to firebase
  }

  deleteStation(Station: Station): any {
    //delete Station on firebase
  }

  editStation(Station: Station) {
    //edit station in firebase
  }

}
