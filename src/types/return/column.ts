import {Audited} from '../audited';

export interface Column extends Audited {
  name: string;
  position: number;
  archived_date: string;
}
