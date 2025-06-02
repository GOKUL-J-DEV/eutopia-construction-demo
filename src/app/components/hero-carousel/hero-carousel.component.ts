import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICarouselSlide } from '../../interfaces/ui.interface';

@Component({
  selector: 'app-hero-carousel',
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent {
  protected activeIndex: number = 0;
  protected slides: ICarouselSlide[] = [
    {
      title: 'Building Dreams',
      description:
        'Transforming visions into architectural masterpieces with precision and excellence',
      imageUrl: '/assets/images/slide1.jpg',
      titleClass: 'typewriter',
    },
    {
      title: 'Modern Architecture',
      description:
        'Creating innovative spaces that blend functionality with stunning design',
      imageUrl: '/assets/images/slide2.jpg',
    },
    {
      title: 'Quality Construction',
      description:
        'Delivering superior craftsmanship with attention to every detail',
      imageUrl: '/assets/images/slide3.jpg',
    },
  ];

  ngOnInit() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    }, 5000);
  }

  setSlide(index: number) {
    this.activeIndex = index;
  }
}
