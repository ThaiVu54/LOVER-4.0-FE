export class SignUpForm{
  username?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  roles?: string[];

  constructor(username: string, email: string, password: string, phoneNumber: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.roles = ['user']
  }
}
