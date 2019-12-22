import {Injectable} from '@angular/core';
import {Persona} from './models/persona.interface';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaleService {
  private readonly baseUrl: string = 'http://localhost:3000/persone';

  constructor(private http: HttpClient) {}

  getPersonale(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl);
  }

  updatePersonale(persona: Persona) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${this.baseUrl}/${persona.id}`, persona, {headers});
  }
}
