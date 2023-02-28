import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../app.server.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent {
  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }

  constructor(private service: ServerService, private router: Router) {}
  
  // Pobiera dane z serwera za pomocą GET
  ngOnInit(){
    this.service.getUserData().subscribe((data: UserData) => {
      this.user.firstname = data.firstName;
      this.user.lastname = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
    });
  }

  hidePassword(password: string): string {
    return '*'.repeat(password.length);
  }

  logout(): void {
    this.service.clearUserData().subscribe((res) => {
      this.router.navigate(["/"]);
    }, 
    (error) => {
      console.error('Nie udało się wylogować', error);
    });
  }
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}