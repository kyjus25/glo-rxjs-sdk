import {Sort} from '../sort';

export enum AttachmentRequestFields {
  filename = 'filename',
  mime_type = 'mime_type',
  url = 'url',
  created_by = 'created_by',
  created_date = 'created_date'
}
export interface AttachmentRequest {
  fields?: AttachmentRequestFields[] | string[];
  page?: number;
  per_page?: number;
  sort?: Sort;
}

export interface AttachmentBody {
  file: string;
}
