import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service {
  
  celsiusValue: any = " ";
  fahrenheitValue: any = " ";

/*** [API] GeoDB Cities  ***/

  private geo_cities_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  private geo_cities_key = '002e9db744msh8b3fcde43bfdab3p10e298jsnebf5c3dabb4d';

/*** [API] Open weather ***/
  
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Example using OpenWeatherMap
  private apiKey = '058910a23841670548d7dd08231fc114'; // Replace with your actual API key
  
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`; // Add units for Celsius - &units=metric
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=058910a23841670548d7dd08231fc114&units=metric`;
    return this.http.get(url1);
  }

  getCitiesName(name: string){
    //const url2 = `${this.geo_cities_url}?q=${}&appid=${this.geo_cities_key}`;
    //const url3 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?q=mumbai&appid=002e9db744msh8b3fcde43bfdab3p10e298jsnebf5c3dabb4d`;
    //return this.http.get(url3);
  }


   // Convert Celsius to Fahrenheit
  convertToFahrenheit(): void {
    // Use 9.0 and 5.0 for floating-point division
    this.fahrenheitValue = (this.celsiusValue * 9.0 / 5.0) + 32;
  }

  // Convert Fahrenheit to Celsius
  convertToCelsius(): void {
    this.celsiusValue = (this.fahrenheitValue - 32) * 5.0 / 9.0;
  }

     const sunriseTimestampMs = weatherData.current.sunrise * 1000;

}
