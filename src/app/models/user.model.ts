export interface UserInterfaceData {
  userName: string;
  login: string;
  password?: string;
}

export interface UserInterface extends UserInterfaceData {
 
  isAuthenticated?: boolean;
  greet(): string;
}

export class User implements UserInterface {
  userName: string = '';
  login: string = '';
  password?: string | undefined;
  isAuthenticated?: boolean | undefined = false;

  constructor(user: UserInterfaceData | null=null) {
    if (user) {
      this.userName = user.userName;
      this.login = user.login;
      this.isAuthenticated = true;
    }
  }

  greet(): string {
    return `Hello ${this.userName}`;
  }
}
