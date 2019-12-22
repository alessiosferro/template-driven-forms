import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Sesso} from '../models/sesso.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  private readonly apiUrl = 'http://localhost:3000';
  private Sesso$: BehaviorSubject<Sesso[]> = new BehaviorSubject<Sesso[]>(null);

  constructor(private http: HttpClient) {}

  getStaticSesso(): void {
    this.http.get<Sesso[]>(`${this.apiUrl}/sesso`).subscribe((sesso) => {
      this.Sesso$.next(sesso);
    });
  }

  get sesso() {
    return this.Sesso$.getValue();
  }

  get sesso$() {
    return this.Sesso$.asObservable();
  }
}
