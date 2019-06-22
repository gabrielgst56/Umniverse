import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import{ APIRepository } from './../api-repository.service'
import { Station } from '../models/station';

@Component({
  selector: 'app-list-station',
  templateUrl: './list-stations.component.html',
  styleUrls: ['./list-stations.component.css']
})

export class ListStationComponent implements OnInit {

  private  Stations:  Array<Station> = [];

  constructor(private router: Router, private  apiRepository:  APIRepository
  ) { }

  ngOnInit() {
     this.getStations();
  }

  public getStations(){
      this.apiRepository.listStations().subscribe((data:  Array<Station>) => {
          this.Stations  =  data;
      });
  }

  public deleteStation(Station: Station) : void {
    this.apiRepository.deleteStation(Station)
      .subscribe( data => {
        this.getStations();
      })
  }

  public editStation(Station: Station) : void{
    this.apiRepository.Station = Station;
    this.router.navigate(['edit-station']);
  }


  public addStation() : void{
    this.router.navigate(['add-station']);
  }

}
