import { Component, inject} from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
//Models
import { Article } from '../../../../shared/models/article.model';
import { VideoPro } from '../../../../shared/models/video-pro.model';

//Para el formulario
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

//Services
import { PremiumVideosServiceTsService } from '../../../../core/services/premium-videos.service';
import { PremiumArticlesService } from '../../../../core/services/premium-articles.service';

//Components
import { PremiumArticleComponent } from '../../../../shared/components/premium-article/premium-article.component';
import { VideoPremiumComponent } from '../../../../shared/components/video-premium/video-premium.component';

//Router
import { Router } from '@angular/router';
import { NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-premium-home',
  standalone: true,
  imports: [
    HeaderComponent,
    PremiumArticleComponent,
    VideoPremiumComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './premium-home.component.html',
  styleUrl: './premium-home.component.css'
})
export class PremiumHomeComponent {
  articles: Article[] = [];
  videos: VideoPro[] = [];
  filteredArticles: Article[] = [];
  filteredVideos: VideoPro[] = [];


  private articleService = inject(PremiumArticlesService);
  private videoService = inject(PremiumVideosServiceTsService);

  searchValue: string = '';

  constructor(private router: Router) { }
  ngOnInit() {
    this.loadArticles();
    this.loadVideos();
  }

  //METODOS PARA FILTRAR
  onSearch(){
    const value = this.searchValue.toLowerCase();
    this.filteredArticles = this.articles.filter(
      (article) => article.title.toLowerCase().includes(value) ||
          article.author.toLowerCase().includes(value)
    );
    this.filteredVideos = this.videos.filter(
      (video) => video.title.toLowerCase().includes(value)
    );
  }

  clearSearch() {
    this.searchValue = '';
    this.filterArticles();
    this.filterVideos();
  }

  //METODOS PARA ARTICULOS
  loadArticles() {
    this.articles = this.articleService.getArticles();
    this.filteredArticles = this.articles;
  }

  filterArticles() {
    const value = this.searchValue.toLowerCase();
    this.filteredArticles = this.articles.filter(
      article => article.title.toLowerCase().includes(value) ||
        article.author.toLowerCase().includes(value)
    );
  }

  goArticle(id: number) {
    this.router.navigate(['user/subscriber/premium-articles', id]);
  }

  //METODOS PARA VIDEOS
  loadVideos() {
    this.videos = this.videoService.getVideos();
    this.filteredVideos = this.videos;
  }

  filterVideos() {
    const value = this.searchValue.toLowerCase();
    this.filteredVideos = this.videos.filter(
      video => video.title.toLowerCase().includes(value)
    );
  }

  goVideo(id: number) {
    this.router.navigate(['user/subscriber/premium-videos', id]);
  }
}
