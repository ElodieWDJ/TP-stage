 import { Injectable } from '@angular/core';

  @Injectable({
  providedIn: 'root'
 })



export class AuthentificationService {
//  mail:any[];
//  password:any[];
  
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

  //  onAuth(mail,password){
  //     if (mail=="a")
  //     else if (password=="b")
  //     else 
  //     return ['/home'];
  //  }

   onAuth(mail_value:string,password_value:string):boolean{
    for(let user of this.users){
      console.log(user.mail);
      if (mail_value == user.mail)
        return true;
    }
    return false;
    
    
    
    /*
      if (mail_value=="jean.jean@jean.fr")
        return true;
      else if (password_value=="jean")
        return true;
      else 
        return false;
        //this.users[index].status = 'connecté';
    */
    }



}
