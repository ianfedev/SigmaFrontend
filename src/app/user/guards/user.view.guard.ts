import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IUser} from '../../models/IUser';
import {Injectable} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserViewGuard implements Resolve<IUser> {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    const id = route.paramMap.get('id');
    return this.userService.viewUser(id).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.router.navigate(['/users']);
        return null;
      }
    }));
  }
}
