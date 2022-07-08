import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
 constructor(
  private http: HttpClient
 ) { }
 
 entrar(UserLogin:UserLogin):Observable<UserLogin> {
return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',UserLogin)

 }

 cadastrar(usuario:Usuario):Observable<Usuario> {
 return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',Usuario)

 }

}






