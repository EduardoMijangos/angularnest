import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskReceived } from '../home/task-received.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000/api/task/findTaskByUser/';

  constructor(private http: HttpClient) { }

  getTaskByUserId(email: string) {
    return this.http.get<TaskReceived[]>(this.url + email);
  }
}
