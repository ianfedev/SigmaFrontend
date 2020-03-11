import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {IPaginateResult} from '../models/IPaginateResult';
import {IGroup} from '../models/IGroup';

@Injectable()
export class GroupService {

  constructor(
    private http: HttpClient
  ) {}

  public viewGroup(id: string): Observable<IGroup> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', AuthService.getToken());
    return this.http.get(GLOBAL.url + 'group/view/' + id, {headers}) as Observable<IGroup>;
  }

  public listGroup(page: number): Observable<IPaginateResult<IGroup>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', AuthService.getToken());
    return this.http.get(GLOBAL.url + 'group/list/' + page, {headers}) as Observable<IPaginateResult<IGroup>>;
  }

  public updateGroup(group: IGroup): Observable<IGroup> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', AuthService.getToken());
    return this.http.put(GLOBAL.url + 'group/update/' + group._id, group, {headers}) as Observable<IGroup>;
  }

}
