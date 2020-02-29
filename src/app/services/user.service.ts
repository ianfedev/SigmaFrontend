import {Observable} from 'rxjs';
import {IUser} from '../models/IUser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public viewUser(id: string): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', AuthService.getToken());
    return this.http.get(GLOBAL.url + 'users/view/' + id, {headers}) as Observable<IUser>;
  }

  public viewOwnUser(): Observable<IUser> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', AuthService.getToken());
    return this.http.get(GLOBAL.url + 'users/me', {headers}) as Observable<IUser>;
  }

}
