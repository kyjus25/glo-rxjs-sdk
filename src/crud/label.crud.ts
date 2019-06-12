import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {LabelBody} from '../types/payload/label.request';
import {Label} from '../types/return/label';

export class LabelCrud extends RequestService {
  public create(boardId: string, body: LabelBody): Observable<Label> {
    return this.request('post', '/boards/' + boardId + '/labels', body, null);
  }
  public update(boardId: string, labelId: string, body: LabelBody): Observable<Label> {
    return this.request('post', '/boards/' + boardId + '/labels/' + labelId, body, null);
  }
  public delete(boardId: string, labelId: string): Observable<string> {
    return this.request('delete', '/boards/' + boardId + '/columns/' + labelId, null, null);
  }
}
