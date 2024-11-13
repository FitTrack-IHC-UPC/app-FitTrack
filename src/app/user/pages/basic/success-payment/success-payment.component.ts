import { Component, inject} from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-payment',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './success-payment.component.html',
  styleUrl: './success-payment.component.css'
})
export class SuccessPaymentComponent {
  private authService = inject(AuthService);
  user = this.authService.currentUser;
  role = this.user?.role;
  name = this.user?.name;
  constructor(private router: Router) {
  }

  pay() {
    if (this.user) {
      this.user.role = 'subscriber';
      this.authService.updateUser(this.user); // Actualiza el usuario en el servicio de autenticación
      alert('¡Felicidades! Ahora eres un usuario premium.');
      this.router.navigate(['/user/home']); // Redirige al usuario a la página de inicio
    }else{
      alert('¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.');
    }
  }


}
