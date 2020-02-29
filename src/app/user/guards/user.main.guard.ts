import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IUser} from '../../models/IUser';
import {Injectable} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IPaginateResult} from '../../models/IPaginateResult';

@Injectable()
export class UserMainGuard implements Resolve<IPaginateResult<IUser>> {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginateResult<IUser>> {
    let page = 1;
    if (route.params.page) { page = + route.paramMap.get('page'); }
    return this.userService.listUsers(page).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.router.navigate(['/users']);
        return null;
      }
    }));
  }
}
