import {RequestService} from '../request.service';
import {Observable} from 'rxjs/Observable';
import {Attachment} from '../types/return/attachment';
import {AttachmentBody, AttachmentRequest} from '../types/payload/attachment.request';

export class AttachmentCrud extends RequestService {
  public get(boardId, cardId, query?: AttachmentRequest): Observable<Attachment[]> {
    const queryString = this.buildQueryString(query);
    return this.request('get', '/boards/' + boardId + '/cards/' + cardId + '/attachments', null, queryString);
  }
  public create(boardId, cardId, body: AttachmentBody): Observable<Attachment> {
    return this.request('post', '/boards/' + boardId + '/cards/' + cardId + '/attachments', body, null);
  }
}
