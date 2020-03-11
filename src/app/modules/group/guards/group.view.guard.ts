import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GroupService} from '../../../services/group.service';
import {IGroup} from '../../../models/IGroup';

@Injectable()
export class GroupViewGuard implements Resolve<IGroup> {

  constructor(
    private groupService: GroupService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGroup> {
    const id = route.paramMap.get('id');
    return this.groupService.viewGroup(id).pipe(map(response => {
      if (response) {
        console.log(response);
        return response;
      } else {
        this.router.navigate(['/users']);
        return null;
      }
    }));
  }
}
