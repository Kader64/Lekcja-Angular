import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post('http://localhost:3000/user', userData);
  }

  getUserData() : any{
    return this.http.get('http://localhost:3000/user')
  }
  clearUserData(){
    return this.http.delete('http://localhost:3000/user')
  }
}
