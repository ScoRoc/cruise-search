import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  private apiUrl: string = 'https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }

}
