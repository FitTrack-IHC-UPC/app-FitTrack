import { Injectable } from '@angular/core';
import { VideoPro } from '../../shared/models/video-pro.model';

@Injectable({
  providedIn: 'root'
})
export class PremiumVideosServiceTsService {
  private videos: VideoPro[] = [
    {
      id: 1,
      title: 'Rutina con Loop Band',
      time: 20,
      calories: 150,
      repetitions: 10,
      image: 'assets/images/premium-videos/video1.jpg',
      video_link: "https://www.youtube.com/embed/Cc87cqSn4vk?autoplay=0&loop=1&rel=0&modestbranding=1"
    },
    {
      id: 2,
      title: 'Rutina para principiantes',
      time: 13,
      calories: 300,
      repetitions: 15,
      image: 'assets/images/premium-videos/video2.jpg',
      video_link: "https://www.youtube.com/embed/Tp0g0855SlU?autoplay=0&loop=1&rel=0&modestbranding=1"
    },
    {
      id: 3,
      title: 'Estiramientos',
      time: 10,
      calories: 100,
      repetitions: 5,
      image: 'assets/images/premium-videos/video3.jpg',
      video_link: "https://www.youtube.com/embed/YQQfhILVR7c?autoplay=0&loop=1&rel=0&modestbranding=1"
    },
    {
      id: 4,
      title: 'Rutina de cardio',
      time: 10,
      calories: 200,
      repetitions: 10,
      image: 'assets/images/premium-videos/video4.jpg',
      video_link: "https://www.youtube.com/embed/keMxEgwBxtE?autoplay=0&loop=1&rel=0&modestbranding=1"
    },
    {
      id: 5,
      title: 'Rutina de fuerza',
      time: 15,
      calories: 250,
      repetitions: 15,
      image: 'assets/images/premium-videos/video5.jpg',
      video_link: "https://www.youtube.com/embed/15F417fqaJ4?autoplay=0&loop=1&rel=0&modestbranding=1"
    },
    {
      id: 6,
      title: 'Ejercicios de acondicionamiento',
      time: 12,
      calories: 175,
      repetitions: 35,
      image: 'assets/images/premium-videos/video6.jpg',
      video_link: "https://www.youtube.com/embed/yHMQiLpMka0?autoplay=0&loop=1&rel=0&modestbranding=1"
    }
  ]
  constructor() { }

  getVideos(): VideoPro[] {
    return this.videos;
  }

  getVideoById(id: number): VideoPro | null{
    return this.videos.find(video => video.id === id) ?? null;
  }
}
