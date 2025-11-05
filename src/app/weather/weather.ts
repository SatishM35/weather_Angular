import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../service/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class Weather implements OnInit{

  cityName: string = 'Mumbai'; // Default city
  todayDate: Date = new Date();
  weatherData: any;
  loading: boolean = false;
  error: string = '';

  constructor(private Service: Service) {}

  ngOnInit(): void {
    this.getWeather();
  }
    getWeather(): void {
    this.loading = true;
    this.error = '';
    this.Service.getWeatherData(this.cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not fetch weather data. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }

}

  
  
