import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather!: Weather;
  areas = ['Sydney', 'Penrith, AU', 'Jordan Springs, AU', 'St Marys, AU'];
  selectedArea = 'Jordan Springs';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));
  }

  checkSelectedValue(value: string) {
    console.log(`The value is ${value}`);
  }
}
