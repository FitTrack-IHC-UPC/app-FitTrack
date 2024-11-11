import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})

export class SubscribeComponent {
  montoSeleccionado: number = 0;
  constructor(private router: Router,  public dialog: MatDialog) { }

  irAPago() {
    if (this.montoSeleccionado > 0) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe(resultado => {
        if (resultado) {
          this.router.navigate(['/user/basic/payment', this.montoSeleccionado]);
        }
      });
    } else {
      alert('Por favor, selecciona una opción de suscripción.');
    }
  }
}
