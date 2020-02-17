import { Component, OnInit, Input } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any[];
 

  constructor(private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.authentificationService.users;
  }

  login(mail: string, password: string) {
    if (mail == "")
      alert("Vous n'avez pas renseigné votre email!");
    else if (password == "")
      alert("Vous n'avez pas renseigné votre mot de passe!")
    else {
      let authOk = this.authentificationService.onAuth(mail, password)
      if (authOk==true)
        this.router.navigate(["/home"]);
      else 
       alert('erreur authentification');
    }
  }



}

