import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {CommentBody, CommentRequest} from '../types/payload/comment.request';
import {Comment} from '../types/return/comment';

export class CommentCrud extends RequestService {
  public get(boardId: string, cardId: string, query?: CommentRequest): Observable<Comment[]> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId + '/cards/' + cardId + '/comments', null, queryString);
  }
  public create(boardId: string, cardId: string, body: CommentBody): Observable<Comment> {
    return this.request('post', '/boards/' + boardId + '/cards/' + cardId + '/comments', body, null);
  }
  public batchCreate(boardId: string, cardId: string, body: CommentBody[]): Observable<Comment[]> {
    return this.request('post', '/boards/' + boardId + '/cards/' + cardId + '/comments/batch', body, null);
  }
  public update(boardId: string, cardId: string, commentId: string, body: CommentBody): Observable<Comment> {
    return this.request('post', '/boards/' + boardId + '/cards/' + cardId + '/comments/' + commentId, body, null);
  }
  public delete(boardId: string, cardId: string, commentId: string): Observable<string> {
    return this.request('delete', '/boards/' + boardId + '/cards/' + cardId + '/comments/' + commentId, null, null);
  }
}
