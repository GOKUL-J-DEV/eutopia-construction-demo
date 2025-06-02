import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HeroCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
