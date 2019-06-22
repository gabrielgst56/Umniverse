import { Component, OnInit } from '@angular/core';
import { Station } from '../models/station';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIRepository } from '../api-repository.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router: Router, private  apiRepository:  APIRepository) { 

  }

  submitted = false;
  station:  Station;
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name:['', Validators.required],
      price: [],
      umbrellaQuantity: []
    });
  }

  
  get f() { return this.addForm.controls; }

  onSubmit(){
    this.submitted = true;
 
    if (this.addForm.invalid) {
        return;
    }

    /*let station:Station = new Station(
      0,
      this.addForm.value.name,
      this.addForm.value.author,
      null,
      this.addForm.value.price,
      this.addForm.value.quantity
    );*/
    let station = new Station(
      1,
      "Teste",
      0,
      0,
      10
    );

    this.apiRepository.addStation(station)
    .subscribe( data => {
      this.router.navigate(['list-station']);
    });
  }

  return(){
    this.router.navigate(['list-station']);
  }
  
}
