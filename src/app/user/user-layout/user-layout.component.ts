import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet],
=======
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
>>>>>>> develop
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
