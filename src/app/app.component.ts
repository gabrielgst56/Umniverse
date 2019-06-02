import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Umniverse';
  texto : string = 'IFSP Campinas - Umniverse';
  lat: number = -22.8505229;
  lng: number = -47.1278806;
  zoom: number = 15;
}
