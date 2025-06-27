import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  studentName: string = '';
  mobileNumber: string = '';
  neetScore: string = '';

  private firestore: Firestore = inject(Firestore);
  private router: Router = inject(Router);

  async onSubmit() {
    const registrationData = {
      studentName: this.studentName,
      mobileNumber: this.mobileNumber,
      neetScore: this.neetScore
    };

    try {
      const registrationsRef = collection(this.firestore, 'registrations');
      await addDoc(registrationsRef, registrationData);
      console.log('Registration data saved to Firestore:', registrationData);
      
      // Reset form
      this.studentName = '';
      this.mobileNumber = '';
      this.neetScore = '';

      // Download the PDF
      const link = document.createElement('a');
      link.href = 'assets/NEET 2025 Detail Solution Code 45.pdf'; // Updated relative path to the new PDF
      link.download = 'NEET 2025 Detail Solution Code 45.pdf'; // Updated file name for download
      link.click();

      // Navigate to thank you page
      this.router.navigate(['/thank-you']);
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  }
}
