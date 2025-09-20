import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service {
  

  /*** [API] GeoDB Cities  ***/

  private geo_cities_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  private geo_cities_key = '002e9db744msh8b3fcde43bfdab3p10e298jsnebf5c3dabb4d';

/*** [API] Open weather ***/
  
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Example using OpenWeatherMap
  private apiKey = '058910a23841670548d7dd08231fc114'; // Replace with your actual API key
  
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`; // Add units for Celsius
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=058910a23841670548d7dd08231fc114`;
    return this.http.get(url1);
  }

  getCitiesName(name: string){
    //const url2 = `${this.geo_cities_url}?q=${}&appid=${this.geo_cities_key}`;
    //const url3 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?q=mumbai&appid=002e9db744msh8b3fcde43bfdab3p10e298jsnebf5c3dabb4d`;
    //return this.http.get(url3);
  }

}
