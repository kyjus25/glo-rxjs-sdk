import {Audited} from '../audited';

export interface Label extends  Audited{
  name: string;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}
