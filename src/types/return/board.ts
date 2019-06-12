import {Audited} from '../audited';
import {BoardMember} from './board-member';
import {Column} from './column';
import {Label} from './label';

export interface Board extends Audited {
  name: string;
  columns: Column[];
  archived_columns: Column[];
  invited_members: BoardMember[];
  members: BoardMember[];
  archived_date: string;
  labels: Label[];
}
