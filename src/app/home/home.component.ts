import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthentificationService } from '../authentification.service';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: username;
  users = [];

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private authentificationService: AuthentificationService
    ) { 
      this.curentUsername = this.authentificationService.currentUserValue;
    }

  username = "";

  logout() {
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
