import { AfterViewInit, Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  
  slides = [
      {
      desktop: '/assets/dekstop10.jpg',
      mobile: '/assets/mobile10.jpg'
    },
      {
      desktop: '/assets/dekstop11.jpg',
      mobile: '/assets/mobile11.jpg'
    },
    {
      desktop: '/assets/dekstop7.jpg',
      mobile: '/assets/mobile7.jpg'
    },
    {
      desktop: '/assets/desktop1.jpg',
      mobile: '/assets/result1.jpg'
    },
    // {
    //   desktop: '/assets/desktop3.jpg',
    //   mobile: '/assets/mobile3.jpg'
    // },
    {
      desktop: '/assets/dekstop8.jpg',
      mobile: '/assets/mobile8.jpg'
    },
   
  ];

  // ✅ Move testimonialVideos outside of animateCounters()
  testimonialVideos = [
    { src: 'assets/testimonial1.mp4', name: 'Syed Umar Ali', class: '(2024-26 Batch)' },
    { src: 'assets/testimonial2.mp4', name: 'Mahee Vinod Bhad', class: '(2024-26 Batch)' },
    { src: 'assets/testimonial3.mp4', name: 'Yumna Kausar', class: '(2024-26 Batch)' },
    { src: 'assets/testimonial4.mp4', name: 'Soham Sachin Deshmukh', class: '(2024-26 Batch)' }
  ];

  categories = [
    {
      title: 'NEET',
      tags: ['class 11', 'class 12', 'Dropper'],
      icon: 'assets/neet.webp',
      bgColor: '#ffefef' 
    },
    {
      title: 'JEE',
      tags: ['class 11', 'class 12', 'Dropper'],
      icon: 'assets/jee.webp',
      bgColor: '#fff4dc' 
    },
    {
      title: 'HSC BOARDS',
      tags: ['class 10', 'class 11', 'class 12'],
      icon: 'assets/12.webp',
      bgColor: '#fffae5' 
    }
  ];

  cities = [
    { name: 'Akola', image: 'assets/akola.webp' },
    { name: 'Nanded', image: 'assets/nanded.jpg' },
    { name: 'Bhiwandi', image: 'assets/mumbai.jpeg' }
  ];

  ngAfterViewInit() {
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 1500,
        ride: 'carousel'
      });
    }
    this.animateCounters();
  }

  animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const prefix = counter.getAttribute('data-prefix') || "";
      const suffix = counter.getAttribute('data-suffix') || "";
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerHTML = `${prefix}${Math.ceil(count)}${suffix}`;
          setTimeout(updateCount, 30);
        } else {
          counter.innerHTML = `${prefix}${target}${suffix}`;
        }
      };

      updateCount();
    });
  }
}
