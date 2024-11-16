import {Component, Input, input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-box-checked-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-checked-radio.component.html',
  styleUrl: './box-checked-radio.component.css'
})


export class BoxCheckedRadioComponent {
  @Input() nameAlternative="";
  @Input() nameIdAlternative=0;
}
