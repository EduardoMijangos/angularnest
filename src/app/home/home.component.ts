import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { TaskService } from '../services/task.service';
import { TaskReceived } from './task-received.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email = localStorage.getItem('email') || 'nada';
  tasks: TaskReceived[] = [];

  constructor(
    private router: Router,
    private authService: TokenService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {

    this.taskService.getTaskByUserId(this.email).subscribe(data =>{
      console.log('estos son las tasks',data);
      this.tasks = data;
    })
  }

  logout() {
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }
}
