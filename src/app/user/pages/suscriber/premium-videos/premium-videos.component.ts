import { Component, OnInit, inject} from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { VideoPro } from '../../../../shared/models/video-pro.model';
import { ActivatedRoute } from '@angular/router';
import { PremiumVideosServiceTsService } from '../../../../core/services/premium-videos.service';
import { SafeUrlPipe } from '../../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-premium-videos',
  standalone: true,
  imports: [HeaderComponent, SafeUrlPipe],
  templateUrl: './premium-videos.component.html',
  styleUrl: './premium-videos.component.css'
})
export class PremiumVideosComponent implements OnInit{
  video: VideoPro | null = null;
  id: number = 0;
  private videoService = inject(PremiumVideosServiceTsService);

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getVideoPro();
  }

  getVideoPro(): void {
    this.video = this.videoService.getVideoById(this.id);
  }
}
