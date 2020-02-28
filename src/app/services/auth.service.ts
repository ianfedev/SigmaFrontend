import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {IUser} from '../models/IUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(
    private titleService: Title,
    private http: HttpClient
  ) {}

  public loginUser(email: string, password: string): Observable<{user: IUser, token: string}> {
    const params = JSON.stringify({email, password});
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(GLOBAL.url + 'authentication/login', params, {headers}) as Observable<{user: IUser, token: string}>;
  }
}
