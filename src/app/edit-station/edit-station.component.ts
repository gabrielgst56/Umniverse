import { Component, OnInit } from '@angular/core';
import { Station } from '../models/station';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIRepository } from '../api-repository.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html',
  styleUrls: ['./edit-station.component.css']
})
export class EditStationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router: Router, private apiRepository: APIRepository) { 
  }

  submitted = false;
  station:  Station;
  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name:['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      capacidade: ['', Validators.required]
    });

    this.station = this.apiRepository.Station;
    debugger;
    this.editForm.setValue({
      name: this.station.Name,
      latitude: this.station.Latitude,
      longitude: this.station.Longitude,
      capacidade: this.station.Capacidade
    });


  }

  
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
 
    if (this.editForm.invalid) {
        return;
    }

    let station = new Station(
      this.editForm.value.name,
      this.editForm.value.latitude,
      this.editForm.value.longitude,
      this.editForm.value.capacidade,
      this.station.key
    );

    let result = this.apiRepository.editStation(station);

    if(result){
      this.router.navigate(['list-stations']);
    }
  }

  return(){
    this.router.navigate(['list-stations']);
  }
  
}
