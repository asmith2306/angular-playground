import {Observable} from 'rxjs';

export abstract class ResourceService<T> {
  abstract get(): Observable<T>;

  abstract getAll(): Observable<Array<T>>;

  abstract create(resource: T): Observable<T>;

  abstract update(resource: T): Observable<T>;

  abstract delete(resource: T);
}
