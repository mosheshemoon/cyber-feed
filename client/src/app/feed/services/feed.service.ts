import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  cardUrl: string = 'http://localhost:3000/api/card';

  private _cardItems$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>(
    []
  );

  public readonly cardItems$: Observable<Card[]>;

  constructor(private http: HttpClient) {
    this.cardItems$ = this._cardItems$.asObservable();
  }

  setItems(WeatherItems: Card[]): void {
    this._cardItems$.next(WeatherItems);
  }

  getCards(): void {
    this.http
      .get<Card[]>(this.cardUrl)
      .pipe(retry(3)).subscribe((data: Card[]) => {
        this.setItems(data);
      },
      err => console.log(err));
  }

  add(card: Card): void {
    this.http
      .post<Card>(this.cardUrl, card).subscribe((card: Card) => {
        this.setItems([...this._cardItems$.value, card]);
      });
  }
}
