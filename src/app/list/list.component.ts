import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import * as XLSX from 'xlsx';

interface Registration {
  studentName: string;
  mobileNumber: string;
  neetScore: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  registrations$: Observable<Registration[]>;

  constructor(private firestore: Firestore) {
    const registrationsRef = collection(this.firestore, 'registrations');
    
    this.registrations$ = from(
      getDocs(query(registrationsRef)).then(snapshot => 
        snapshot.docs.map(doc => doc.data() as Registration)
      )
    );
  }

  ngOnInit() {
  }

  exportToExcel() {
    // Get the data and export to Excel
    const registrationsRef = collection(this.firestore, 'registrations');
    getDocs(query(registrationsRef)).then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data() as Registration);
      
      // Create worksheet
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      
      // Create workbook
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Registrations');
      
      // Save file
      XLSX.writeFile(wb, 'registrations.xlsx');
    });
  }
}