import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario : any;
  autenticado? : boolean;

  constructor(private authService : AngularFireAuth) {
    this.getUsuarioAutenticado();
  }

  getUsuarioAutenticado() {
    return this.authService.currentUser
    .then((data) => {
      console.log(data);
      this.usuario = data;
      this.autenticado = true;
    })
  }

  loginComEmailPassword(email : string, password : string) {
    return this.authService.signInWithEmailAndPassword(email, password);
  }

  cadastrarComEmailPassword(email : string, password : string){
    return this.authService.createUserWithEmailAndPassword(email, password);
  }

  loginComGoogleCount(){
    return this.authLoginProvider(new GoogleAuthProvider());
  }

  authLoginProvider(provider : any){
    return this.authService.signInWithPopup(provider);
  }

  logout(){
    return this.authService.signOut();
  }
}
