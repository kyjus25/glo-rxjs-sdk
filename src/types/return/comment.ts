import {Audited} from '../audited';

export interface Comment extends Audited {
  card_id: string;
  board_id: string;
  updated_date: string;
  updated_by: string;
  text: string;
}
