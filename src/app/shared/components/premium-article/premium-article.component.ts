import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-premium-article',
  standalone: true,
  imports: [],
  templateUrl: './premium-article.component.html',
  styleUrl: './premium-article.component.css'
})
export class PremiumArticleComponent {
  @Input() title!: string;
  @Input() img!: string;
  @Input() author!: string;
}
