 import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';

  @Injectable({
  providedIn: 'root'
 })



export class AuthentificationService {
/*
   users = [
    {
    mail: 'jean.jean@jean.fr',
    password: 'jean', 
    status:"",
    },
    {
    mail: 'elodie.elodie@elodie.fr',
    password: 'elodie',
    status:"",
    }
   ];
*/
   constructor(private  http: HttpClient) { }

   


   onAuth(mail_value:string,password_value:string):boolean{
    this.http.get<any>('http://localhost:8080?user=' + mail_value).subscribe(
      data => {
            //this.totalAngularPackages = data.total;
            console.log("Ici : " + data.user);
            
        })
        console.log("La");
        return false;
    /*
    for(let user of this.users){
      console.log(user.mail);
      if (mail_value == user.mail)
        return true;
    }
    return false;
    */
    
    }

}
