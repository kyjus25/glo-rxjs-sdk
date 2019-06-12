import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {Board} from '../types/return/board';
import {BoardBody, BoardRequest, BoardRequestFields} from '../types/payload/board.request';

export class BoardCrud extends RequestService {
  public get(query?: BoardRequest): Observable<Board[]> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards', null, queryString);
  }
  public create(body: BoardBody): Observable<Board> {
    return this.request('post', '/boards', body, null);
  }
  public read(boardId: string, query?: BoardRequestFields[] | string[]): Observable<Board> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId, null, queryString);
  }
  public update(boardId: string, body: BoardBody): Observable<Board> {
   return this.request('post', '/boards/' + boardId, body, null);
  }
  public delete(boardId: string): Observable<string> {
    return this.request('delete', '/boards/' + boardId, null, null);
  }
}


