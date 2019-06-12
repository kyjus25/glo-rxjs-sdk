import {Audited} from '../audited';

export interface Attachment extends Audited {
  filename: string;
  mime_type: string;
  url: string;
}
