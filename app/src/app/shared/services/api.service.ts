import { apiURL, key } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(url: string, baseUrl = apiURL) {
    return this.httpClient.get<any>(`${baseUrl}/${url}`);
  }

  public getNEOSW(start, end) {
    return this.get(
      `neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${key}`
    );
  }

  public getApod() {
    return this.get(`planetary/apod?api_key=${key}`);
  }

  public getInsightWeather() {
    return this.get(`insight_weather/?api_key=${key}&feedtype=json&ver=1.0`);
  }

  public getCuriosityPics() {
    return this.get(`mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`);
  }
}
