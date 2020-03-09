import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private http: HttpClient) { }


  username = ""

  onAuth(mail_value: string, password_value: string)  {
    
     let myDatas = "{\"login\" : \""+ mail_value+"\" ,\"password\" : \""+password_value+"\"}";
     console.log(myDatas);

        this.http.post('http://server.ppa.local.com/login', myDatas).subscribe(res => {
            console.log(res)
        });
    
      
  
}
}
