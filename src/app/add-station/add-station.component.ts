import { Component, OnInit } from '@angular/core';
import { Station } from '../models/station';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIRepository } from '../api-repository.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router: Router, private  APIRepository:  APIRepository) { 
  }
  submitted = false;
  station:  Station;
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name:['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      capacidade: ['', Validators.required]
    });
  }

  
  get f() { return this.addForm.controls; }

  onSubmit(){
    this.submitted = true;
 
    if (this.addForm.invalid) {
        return;
    }

    let station = new Station(
      this.addForm.value.name,
      this.addForm.value.latitude,
      this.addForm.value.longitude,
      this.addForm.value.capacidade,
      null
    );

    let result = this.APIRepository.addStation(station);

    if(result){
      this.router.navigate(['list-stations']);
    }
  }

  return(){
    this.router.navigate(['list-stations']);
  }
  
}
