 import { Injectable } from '@angular/core';

  @Injectable({
  providedIn: 'root'
 })



export class AuthentificationService {

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

   constructor() { }

   onAuth(mail_value:string,password_value:string):boolean{
    for(let user of this.users){
      console.log(user.mail);
      if (mail_value == user.mail)
        return true;
    }
    return false;
    
    
    }

}
