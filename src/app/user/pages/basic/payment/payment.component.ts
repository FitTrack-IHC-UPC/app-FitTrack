import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute} from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  monto: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.monto = +this.route.snapshot.paramMap.get('amount')!;
  }

}
