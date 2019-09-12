import {Injectable} from '@angular/core';
import {ResourceService} from './resource-service';
import {Post} from '../models/post';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ResourceService<Post> {

  endpoint = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
    super();
  }

  create(resource: Post): Observable<Post> {
    return this.http.post<Post>(this.endpoint, resource, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(resource: Post) {
  }

  get(): Observable<Post> {
    return undefined;
  }

  getAll(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.endpoint, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: Post): Observable<Post> {
    return undefined;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
