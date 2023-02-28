import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from './../app.server.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  // Deklaracja grupy "inputów"
  userForm: FormGroup;

  // Każda zmienna odpowieda polu z formularza
  error_block: string = "";

  // Deklaracja nasłuchiwania na zmiany w polach formularzy
  constructor(private fb: FormBuilder, private service: ServerService, private router: Router) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  // Wysyłanie danych na serwer
  onSubmit() {
    this.error_block = ""
    // 1. Pakujemy dane do obiektu
    const userData = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    };

    // Walidacja
    if(userData.password != this.userForm.value.confirmPassword){
      this.error_block = "Hasła musza być identyczne"
      return;
    }

    // 2. Przekazujemy dane do klasy zajmującej się wymianą danych z serwerem i nasłuchujemy na odpowiedź
    this.service.registerUser(userData).subscribe((res) => {
        console.log('Registration successful:', res);
        this.router.navigate(["/info"]);
      }, 
      (error) => {
        console.error('Registration failed:', error);
        this.error_block = "Bład rejestracji, Serwer nie odpowiada"
      });
  }
}
