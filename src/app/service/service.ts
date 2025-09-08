import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service {
  
  
  private apiKey = '058910a23841670548d7dd08231fc114'; // Replace with your actual API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Example using OpenWeatherMap

  
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`; // Add units for Celsius
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=058910a23841670548d7dd08231fc114`;
    return this.http.get(url1);
  }

}
