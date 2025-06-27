import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  categories = [
    // { title: 'Online Classes', icon: 'bi bi-laptop', tags: ['Live', 'Recorded', 'Doubt Solving'] },
    // { title: 'Offline Classes', icon: 'bi bi-house-door', tags: ['In-Person', 'Doubt Clearing', 'Tests'] },
    { title: 'NEET Coaching', icon: 'bi bi-heart-pulse', tags: ['Medical', 'AIIMS', 'MCQs'] },
    { title: 'JEE Coaching', icon: 'bi bi-calculator', tags: ['Engineering', 'Concept-Based', 'Mock Tests'] },
    // { title: 'IIT Foundation', icon: 'bi bi-lightbulb', tags: ['Advanced', 'Problem Solving', 'Rank Boost'] },
    { title: 'Repeater Batch', icon: 'bi bi-arrow-repeat', tags: ['Improvement', 'Crash Course', 'Target Exam'] },
    { title: 'Toppers Batch', icon: 'bi bi-award', tags: ['High Achievers', 'Advanced Problems', 'Competitive'] }
  ];
}
