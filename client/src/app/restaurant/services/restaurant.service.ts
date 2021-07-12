import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurantUrl: string = 'http://localhost:3000/api/restaurants';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Restaurant[] | Error> {
    return this.http
      .get<Restaurant[]>(this.restaurantUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant | Error> {
    return this.http
      .post<Restaurant>(this.restaurantUrl, restaurant)
      .pipe(catchError(this.handleError));
  }

  deleteRestaurant(id: string): Observable<void | Error> {
    return this.http
      .delete<void>(`${this.restaurantUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateRestaurant(restaurant: Restaurant): Observable<Restaurant | Error> {
    return this.http
      .put<Restaurant>(`${this.restaurantUrl}/${restaurant._id}`, restaurant)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<Error> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError({message: 'Something bad happened; please try again later.'});
  }
}
