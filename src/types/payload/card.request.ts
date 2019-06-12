import {Sort} from '../sort';

export enum CardRequestFields {
  archived_date = 'archived_date',
  assignees = 'assignees',
  attachment_count = 'attachment_count',
  board_id = 'board_id',
  column_id = 'column_id',
  comment_count = 'comment_count',
  completed_task_count = 'completed_task_count',
  created_by = 'created_by',
  created_date = 'created_date',
  due_date = 'due_date',
  description = 'description',
  labels = 'labels',
  name = 'name',
  total_task_count = 'total_task_count',
  updated_date = 'updated_date'
}
export interface CardRequest {
  fields?: CardRequestFields[] | string[];
  archived?: boolean;
  page?: number;
  per_page?: number;
  sort?: Sort;
}

export interface CardBody {
  name: string;
  position: number;
  description: {
    text: string;
  };
  column_id: string;
  assignees: {
    id: string;
  };
  labels: {
    id: string;
  };
  due_date: string;
}
