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
  protected currentSlideIndex = 0;

  protected slides:ICarouselSlide[] = [
    {
      title: 'Building Dreams',
      subtitle:
        'Transforming visions into architectural masterpieces with precision and excellence',
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("images/sample-1.jpg")',
    },
    {
      title: 'Modern Architecture',
      subtitle:
        'Creating innovative spaces that blend functionality with stunning design',
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("images/sample-2.jpg")',
    },
    {
      title: 'Quality Construction',
      subtitle:
        'Delivering superior craftsmanship with attention to every detail',
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("images/sample-3.jpg")',
    },
  ];

  protected nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  protected prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  protected goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  protected onMouseMove(event: MouseEvent) {
    const carousel = event.currentTarget as HTMLElement;
    const rect = carousel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const leftThird = width / 3;
    const rightThird = (2 * width) / 3;

    carousel.classList.remove(
      'cursor--left',
      'cursor--right',
      'cursor--circle'
    );

    if (x < leftThird) {
      carousel.classList.add('cursor--left');
    } else if (x > rightThird) {
      carousel.classList.add('cursor--right');
    } else {
      carousel.classList.add('cursor--circle');
    }
  }

  protected onClick(event: MouseEvent) {
    const carousel = event.currentTarget as HTMLElement;
    const rect = carousel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    if (x < width / 3) {
      this.prevSlide();
    } else if (x > (2 * width) / 3) {
      this.nextSlide();
    }
  }
}
