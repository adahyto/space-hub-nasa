import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-apod",
  templateUrl: "./apod.component.html",
  styleUrls: ["./apod.component.scss"]
})
export class ApodComponent implements OnInit {
  apod: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getApod().subscribe(res => {
      this.apod = res;
      console.log(res);
    });
  }
}
