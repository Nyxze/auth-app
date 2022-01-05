import { Injectable } from '@angular/core';
import { User, UserInterface, UserInterfaceData } from '../models/user.model';
import { NotificationService } from './notification.service';

export interface CredentialInterface {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserInterface;

  userList: UserInterfaceData[] = [
    { userName: 'Lataupe', login: 'Rene', password: '123' },
    { userName: 'Swagetti', login: 'Yoloniaise', password: '123' },
    { userName: 'Darksasuke', login: 'Saskue17', password: '456' },
    { userName: 'Yolo', login: 'Lasticot', password: '456' },
  ];

  constructor(private notif: NotificationService) {
    this.user = new User();
  }

  logout(): void {
    this.user.userName = '';
    this.user.isAuthenticated = false;
    this.notif.setMessage('Vous êtes deco')
  }
  findUser(credentials: CredentialInterface): UserInterfaceData | undefined {
    return this.userList.find(
      (item) =>
        item.login === credentials.login &&
        item.password === credentials.password
    );
  }
  authenticate(credentials: CredentialInterface) {
    const user = this.findUser(credentials);
    console.log(user);

    const isAuthenticated = user != undefined;

    if (isAuthenticated) {
      this.notif.setMessage('Vous êtes log');
      this.user = new User(user);
    }

    return isAuthenticated;
  }
}
