import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,
    private httpClient: HttpClient) { }

  username = "";

  logout() {
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
