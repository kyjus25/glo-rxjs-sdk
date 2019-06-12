import {Audited} from '../audited';
import {PartialLabel} from './partial-label';
import {PartialUser} from './partial-user';

export interface Card extends Audited {
  name: string;
  position: number;
  description: {
    text: string;
    created_date: string;
    updated_date: string;
    created_by: {
      id: string;
    }
    updated_by: {
      id: string;
    }
  };
  board_id: string;
  column_id: string;
  updated_date: string;
  archived_date: string;
  assignees: PartialUser[];
  labels: PartialLabel[];
  due_date: string;
  comment_count: number;
  attachment_count: number;
  completed_task_count: number;
  total_task_count: number;
}
