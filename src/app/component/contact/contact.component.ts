import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 20.7074, lng: 77.0010 }; // Replace with your school's latitude & longitude
  zoom = 15;
}
