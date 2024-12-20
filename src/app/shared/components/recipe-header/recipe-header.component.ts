import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './recipe-header.component.html',
  styleUrl: './recipe-header.component.css'
})
export class RecipeHeaderComponent {
  constructor(private location: Location) {}  
  goBack(): void {
    this.location.back(); 
  }
}
