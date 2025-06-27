import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
// Components
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ResultsComponent } from './results/results.component';

import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { Result2025Component } from './result2025/result2025.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ContactComponent,
    CoursesComponent,
    GalleryComponent,
    CarrerComponent,
    ResultsComponent,
    
    RegistrationComponent,
         ListComponent,
         ThankYouComponent,
         Result2025Component,
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
