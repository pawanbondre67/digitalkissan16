import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { map , Observable, pipe, switchMap } from 'rxjs';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  constructor( private weatherService: WeatherService) { }

  city : string = '';
  weatherdata : any;
  address: string = '';
  loading: boolean = false;

  ngOnInit(): void {
    // this.getWeather();
    this.getCurrentLocation();
  }


   getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.loading = true;
      this.setWeatherData(data);
      this.loading = false;
      console.log(data);
    });
  }

  setWeatherData(data: any){
    this.weatherdata = data;

    this.weatherdata.temp_celcius = (this.weatherdata.main.temp - 273.15).toFixed(0);
    this.weatherdata.temp_min = (this.weatherdata.main.temp_min - 273.15).toFixed(0);
    this.weatherdata.temp_max = (this.weatherdata.main.temp_max - 273.15).toFixed(0);

  }

  getCurrentLocation() {
    this.getUserCoordinates().pipe(
      switchMap(coordinates => this.weatherService.reverseGeocode(coordinates.latitude, coordinates.longitude))
    ).subscribe({
      next: (data: any) => {
      console.log(data);
      },
      error: (error) => {
        console.error('Error getting location', error);
      }
    });
  }



  getUserCoordinates(): Observable<{ latitude: number, longitude: number }> {
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            observer.complete();
            console.log(position);
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }


}












// import { map, Observable, pipe, switchMap } from 'rxjs';
// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from './weather.service'; // Make sure to import your WeatherService

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent implements OnInit {
//   city: string = '';
//   weatherdata: any;
//   address: string = '';

//   constructor(private weatherService: WeatherService) { }

//   ngOnInit(): void {
//     this.getCurrentLocation();
//   }

//   getWeather(latitude: number, longitude: number) {
//     this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe(data => {
//       this.setWeatherData(data);
//       console.log(data);
//     });
//   }

//   setWeatherData(data: any) {
//     this.weatherdata = data;
//     this.weatherdata.temp_celcius = (this.weatherdata.main.temp - 273.15).toFixed(0);
//     this.weatherdata.temp_min = (this.weatherdata.main.temp_min - 273.15).toFixed(0);
//     this.weatherdata.temp_max = (this.weatherdata.main.temp_max - 273.15).toFixed(0);
//   }

//   getCurrentLocation() {
//     this.getUserCoordinates().pipe(
//       switchMap(coordinates => this.weatherService.reverseGeocode(coordinates.latitude, coordinates.longitude))
//     ).subscribe({
//       next: (data: any) => {
//         this.address = data.results[0];
//         console.log(this.address);
//         this.getWeather(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
//       },
//       error: (error) => {
//         console.error('Error getting location', error);
//       }
//     });
//   }

//   getUserCoordinates(): Observable<{ latitude: number, longitude: number }> {
//     return new Observable(observer => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             observer.next({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude
//             });
//             observer.complete();
//           },
//           (error) => {
//             observer.error(error);
//           }
//         );
//       } else {
//         observer.error(new Error('Geolocation is not supported by this browser.'));
//       }
//     });
//   }
// }
