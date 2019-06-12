import {Sort} from '../sort';

export enum CommentRequestFields {
  board_id = 'board_id',
  card_id = 'card_id',
  created_date = 'created_date',
  created_by = 'created_by',
  updated_by = 'updated_by',
  updated_date = 'updated_date',
  text = 'text'
}
export interface CommentRequest {
  fields?: CommentRequestFields[] | string[];
  page?: number;
  per_page?: number;
  sort?: Sort;
}

export interface CommentBody {
  text: string;
}
