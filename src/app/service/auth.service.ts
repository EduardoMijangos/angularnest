import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/user/login';

  constructor(private http: HttpClient) {}

  login(loginData: { email: string, password: string }) {
    return this.http.post(this.url, loginData);
  }
}
