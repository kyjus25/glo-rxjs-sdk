import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../types/return/user';
import {UserRequestFields} from '../types/payload/user.request';

export class UserCrud extends RequestService {
  public get(query?: UserRequestFields[] | string[]): Observable<User> {
    const queryString = this.buildQueryString({fields: query});
    return this.request('get', '/user', null, queryString);
  }
}
