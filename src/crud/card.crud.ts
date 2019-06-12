import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {CardBody, CardRequest, CardRequestFields} from '../types/payload/card.request';
import {Card} from '../types/return/card';

export class CardCrud extends RequestService {
  public get(boardId: string, query?: CardRequest): Observable<Card[]> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId + '/cards', null, queryString);
  }
  public getByColumn(boardId: string, columnId: string, query?: CardRequest): Observable<Card[]> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId + '/columns/' + columnId + '/cards', null, queryString);
  }
  public create(boardId: string, body: CardBody): Observable<Card> {
    return this.request('post', '/boards/' + boardId + '/cards', body, null);
  }
  public batchCreate(boardId: string, body: CardBody[]): Observable<Card[]> {
    return this.request('post', '/boards/' + boardId + '/cards/batch', body, null);
  }
  public read(boardId: string, cardId: string, query?: CardRequestFields[] | string[]): Observable<Card> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId + '/cards/' + cardId, null, queryString);
  }
  public update(boardId: string, cardId: string, body: CardBody): Observable<Card> {
    return this.request('post', '/boards/' + boardId + '/cards/' + cardId, body, null);
  }
  public delete(boardId: string, cardId: string): Observable<string> {
    return this.request('delete', '/boards/' + boardId + '/cards/' + cardId, null, null);
  }
}
