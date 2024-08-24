import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   api_key : string = 'a66b8844fd1fae3c5c074de4107afbbb'



  constructor(private http : HttpClient) { }

    getWeather(city: string){
    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.api_key}`);
    // const data = await response.json();
    // return data;

     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`);
  }

  reverseGeocode(latitude: number, longitude: number) {
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${this.api_key}`;
    return this.http.get(url);
  }


}
