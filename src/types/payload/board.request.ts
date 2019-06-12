import {Sort} from '../sort';

export enum BoardRequestFields {
  archived_columns = 'archived_columns',
  archived_date = 'archived_date',
  columns = 'columns',
  created_by = 'created_by',
  created_date = 'created_date',
  invited_members = 'invited_members',
  labels = 'labels',
  members = 'members',
  name = 'name'
}
export interface BoardRequest {
  fields?: BoardRequestFields[] | string[];
  archived?: boolean;
  page?: number;
  per_page?: number;
  sort?: Sort;
}

export interface BoardBody {
  name: string;
}
