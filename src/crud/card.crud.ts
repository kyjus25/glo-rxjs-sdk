import {RequestService} from '../request.service';

export class CardCrud extends RequestService {

  public get(boardId) {
    console.log('get');
  }
  public getByColumn(boardId, columnId) {
    console.log('get');
  }
  public create(boardId) {
    console.log('set');
  }
  public batchCreate(boardId) {
    console.log('set');
  }
  public read(boardId, cardId) {
    console.log('set');
  }
  public update(boardId, cardId) {
    console.log('set');
  }
  public delete(boardId, cardId) {
    console.log('set');
  }
}
