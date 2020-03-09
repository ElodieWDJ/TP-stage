import { Component, OnInit} from '@angular/core';
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



  constructor(private fb: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() { }


  win() {
    this.router.navigate(["/home"]);
  }

  lose() {
    alert('erreur authentification');
  }

  gerewin(b: boolean) {
    if (b) {
      this.win();
    } else {
      this.lose();
    }
  }

  login(mail: string, password: string) {
    if (mail == "")
      alert("Vous n'avez pas renseigné votre email!");
    else if (password == "")
      alert("Vous n'avez pas renseigné votre mot de passe!")
    else {
    this.authentificationService.onAuth(mail, password);
    }
  }
}

