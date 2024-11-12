import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-premium',
  standalone: true,
  imports: [],
  templateUrl: './video-premium.component.html',
  styleUrl: './video-premium.component.css'
})
export class VideoPremiumComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() time!: number;
  @Input() calories!: number;
  @Input() repetitions!: number;
}
