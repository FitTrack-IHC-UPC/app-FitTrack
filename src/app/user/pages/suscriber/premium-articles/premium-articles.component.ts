import { Component, OnInit, inject} from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { Article } from '../../../../shared/models/article.model';
import { ActivatedRoute } from '@angular/router';
import { PremiumArticlesService } from '../../../../core/services/premium-articles.service';

@Component({
  selector: 'app-premium-articles',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './premium-articles.component.html',
  styleUrl: './premium-articles.component.css'
})
export class PremiumArticlesComponent implements OnInit{
  article: Article | null = null;
  id: number = 0;
  month: string = '';
  day: string = '';
  private articleService = inject(PremiumArticlesService);
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getArticle();
    this.loadDate();
  }

  getArticle(): void {
    this.article = this.articleService.getArticleById(this.id);
  }

  loadDate() : void {
    const date = new Date(this.article!.date);
    this.month = (this.toMonth(date.getMonth()+1)).toString();
    this.day = (date.getDate() + 1).toString();
  }

  toMonth(month: number): string {
    switch(month){
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8: return 'Agosto';
      case 9: return 'Septiembre';
      case 10: return 'Octubre';
      case 11: return 'Noviembre';
      case 12: return 'Diciembre';
      default: return '';
    }
  }

}
