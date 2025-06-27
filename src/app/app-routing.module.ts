import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },  
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'career', component: CarrerComponent },
  { path: 'results', component: ResultsComponent },
    { path: 'results-2025', component: Result2025Component },

  { path: 'registration', component: RegistrationComponent },
  { path: 'listprivate', component: ListComponent },
  { path: 'thank-you', component: ThankYouComponent },
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


