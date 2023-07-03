import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private url = 'http://localhost:3000/api/user/current |';

  constructor(private http: HttpClient) { }

  getCurrentUserId(): Observable<number> {
    return this.http.get<number>(this.url);
  }
  
  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  deleteToken() {
    localStorage.removeItem('token');
  }
}
