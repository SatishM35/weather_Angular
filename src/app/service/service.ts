import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiKey = '91abb87867e7bd5034fc916b8ad0d2a6'; // Replace with your actual API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Example using OpenWeatherMap

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Add units for Celsius
    return this.http.get(url);
  }

}
