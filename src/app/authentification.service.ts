import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private http: HttpClient) { }
  username = "";
  private router : Router


  onAuth(mail_value: string, password_value: string) {
    return new Promise((resolve, reject) => {//promesse

      let myDatas = "{\"login\" : \"" + mail_value + "\" ,\"password\" : \"" + password_value + "\"}";
      console.log(myDatas);

      this.http.post('http://server.ppa.local.com/login', myDatas).subscribe(
        data => {
          
          localStorage.setItem('token', data['Poa-Token']);
          localStorage.setItem('username', mail_value);
          resolve(true);
        },

        response => {
          console.log(response.status);
          if (response == 200) {
            resolve(true);
            this.router.navigate(["/home"]);
            
            
          }
          else  (response == 401)
          alert("Erreur authentification")
          reject(true);
        }
      )

    });
  }

}

