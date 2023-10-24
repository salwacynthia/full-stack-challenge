import { store } from 'Infrastructure/Store/Store';

export class EventService {
  private readonly useDispatcher = store.dispatch;
  public dispatch(action: any): void {
    this.useDispatcher(action);
  }
}
