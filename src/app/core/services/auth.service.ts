import { User } from './../../shared/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    {
      id: 1,
      email: 'nick.ordaya@gmail.com',
      name: 'Nick',
      password: 'nick123',
      nickname: 'nick',
      role: 'basic',
      gender: 'masculino',
    },
    {
      id: 2,
      email: 'laura.calderon@gmail.com',
      name: 'Laura',
      password: 'laura123',
      nickname: 'laura',
      role: 'subscriber',
      gender: 'femenino',
    }
  ]

  constructor() {

    // Recuperar los usuarios de localStorage al iniciar la aplicación
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }

    const userFromStorage = localStorage.getItem('currentUser');
    if (userFromStorage) {
      this._currentUser = JSON.parse(userFromStorage);
    }
   }

  private _currentUser: User | null = null;

  get currentUser(): User | null {
    return this._currentUser;
  }

  login(email: string, password: string): void {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this._currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }

  logout(): void {
    this._currentUser = null;
    localStorage.removeItem('currentUser');
  }

  register(name: string, email: string, password: string, confirmpassword: string): User | null {
    if (this.users.find(user => user.email === email)) {
      alert('El email ya tiene una cuenta asociada');
      return null;
    }

    if(password !== confirmpassword) {
      alert('Las contraseñas no coinciden');
      return null;
    }

    const id = this.users.length + 1;
    const role = 'basic';
    const nickname = name.toLowerCase();
    const newUser: User = { id, name, email, password, nickname, role};
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this._currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this._currentUser = updatedUser;
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

}
