import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {Column} from '../types/return/column';
import {ColumnBody} from '../types/payload/column.request';

export class ColumnCrud extends RequestService {
  public create(boardId: string, body: ColumnBody): Observable<Column> {
    return this.request('post', '/boards/' + boardId + '/columns', body, null);
  }
  public batchCreate(boardId: string, body: ColumnBody[]): Observable<Column[]> {
    return this.request('post', '/boards/' + boardId + '/columns/batch', body, null);
  }
  public update(boardId: string, columnId: string, body: ColumnBody): Observable<Column> {
    return this.request('post', '/boards/' + boardId + '/columns/' + columnId, body, null);
  }
  public delete(boardId: string, columnId: string): Observable<string> {
    return this.request('delete', '/boards/' + boardId + '/columns/' + columnId, null, null);
  }
}
