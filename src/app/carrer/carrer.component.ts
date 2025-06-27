import { Component } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent {
  jobListings = [
    { title: 'Telecalling', description: 'Experience in Telecalling, Sales.' },
    { title: 'Marketing Executive', description: 'Experience in Marketing Field.' },
    { title: 'Counsellor', description: 'Experience with counselling.' }
  ];

  applyNow(job: any) {
    const phoneNumber = '918878873188'; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the ${job.title} position. Please provide more details.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
}
