import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { promise } from 'protractor';
import { Router } from '@angular/router';

import  { auth }  from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }


  login(email:string, password:string){

    return new Promise ((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => { 
        resolve(user); 
      }).catch(err => rejected(err));
    });
  }
    register( email : string, password : string){
   return new Promise ((resolve, reject) => {
    this.AFauth.createUserWithEmailAndPassword(email, password).then(res =>{ resolve(res);
    }).catch( err => reject(err));
  });
 }


}
