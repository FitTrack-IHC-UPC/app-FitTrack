import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  monto: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('monto'));

    // Intenta convertir el valor a un número
    this.monto = +this.route.snapshot.paramMap.get('amount')!;

    console.log(this.monto);
  }

}
