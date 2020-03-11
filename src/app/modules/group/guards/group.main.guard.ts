import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IUser} from '../../../models/IUser';
import {Injectable} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IPaginateResult} from '../../../models/IPaginateResult';
import {IGroup} from '../../../models/IGroup';
import {GroupService} from '../../../services/group.service';

@Injectable()
export class GroupMainGuard implements Resolve<IPaginateResult<IGroup>> {

  constructor(
    private groupService: GroupService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginateResult<IGroup>> {
    let page = 1;
    if (route.params.page) { page = + route.paramMap.get('page'); }
    return this.groupService.listGroup(page).pipe(map(response => {
      if (response) {
        return response;
      } else {
        this.router.navigate(['/groups']);
        return null;
      }
    }));
  }
}
