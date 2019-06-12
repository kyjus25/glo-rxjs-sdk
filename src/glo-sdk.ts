import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BoardCrud} from './crud/board.crud';
import {ColumnCrud} from './crud/column.crud';
import {AttachmentCrud} from './crud/attachment.crud';
import {UserCrud} from './crud/user.crud';
import {CommentCrud} from './crud/comment.crud';
import {LabelCrud} from './crud/label.crud';
import {CardCrud} from './crud/card.crud';

@Injectable()
export class GloSDK {

  constructor(
    private http: HttpClient
  ) {}

  public boards: BoardCrud = new BoardCrud(this.http);
  public columns: ColumnCrud = new ColumnCrud(this.http);
  public cards: CardCrud = new CardCrud(this.http);
  public labels: LabelCrud = new LabelCrud(this.http);
  public attachments: AttachmentCrud = new AttachmentCrud(this.http);
  public comments: CommentCrud = new CommentCrud(this.http);
  public user: UserCrud = new UserCrud(this.http);

  public setAccessToken(accessToken) {
    sessionStorage.setItem('gloToken', accessToken);
  }
}
