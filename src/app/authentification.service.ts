import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private http: HttpClient) { }


  username = ""

  onAuth(mail_value: string, password_value: string) {
    return new Promise<boolean>((resolve, reject) => {

      /* Simulating some async stuff... */
      this.http.get<any>('http://localhost:8080?user=' + mail_value + '&password=' + password_value).subscribe(
        data => {
          this.username = data.user;
          localStorage.setItem('token', data.token);
          localStorage.setItem('username',data.user);
          resolve(true);
        },

        response => {
          if (response.status == 200) {
            resolve(true);
          }
            resolve(false);
        }
      )
    });
  }
}
