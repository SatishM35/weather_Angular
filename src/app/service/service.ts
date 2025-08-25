import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiKey = '058910a23841670548d7dd08231fc114'; // Replace with your actual API key
  private baseUrl = 'https://api.openweathermap.org/data/3.0/weather'; // Example using OpenWeatherMap

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`; // Add units for Celsius
    return this.http.get(url);
  }

}
