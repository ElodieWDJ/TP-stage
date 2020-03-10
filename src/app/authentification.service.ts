import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// let http = require('http');
// let url = require('url');

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private http: HttpClient) { }
  username = "";

//   function (request, response) {

// 		let queryObject = url.parse(request.url, true).query;

// 		if (request.method == "GET") {
// 			response.setHeader('Access-Control-Allow-Origin', '*');
// 			console.log("get");
// 			console.log(queryObject.user);
// 			console.log(queryObject.password);
// 			this.onAuth(queryObject.user, queryObject.password).then(b => gere(response, b, queryObject.user)).catch(err => echec(response))

// 		} else {
// 			console.log("tu n'es pas get");
// 			response.writeHead(405, { "content-type": "json" });
// 			response.write('{}');
// 			response.end();
//     }
//     /**Fonction qui gére les réponses */
// function gere(response, b, user) {
// 	if (b) {
// 		reussite(response, user);
// 	} else {
// 		echec(response);
// 	}
// }
// function reussite(response, user) {
// 	console.log("---- 200")
// 	response.writeHead(200, { "content-Type": "json" });
// 	response.write('{"token":"","user":"' + user + '", "role":"", "langue":""}');
// 	response.end();
// }
// /**Fonction qui gére l'échec connexion */
// function echec(response) {
// 	console.log("---- 401");
// 	response.writeHead(401, { "content-type": "json" });
// 	response.write('{}');
// 	response.end();
// }
// 	}

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
          if (response == 200) {
            resolve(true);
          }
          resolve(false);
        }
      )

    });
  }

}

