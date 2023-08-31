import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.scss']
})
export class CuriosityComponent implements OnInit {
  photos: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getCuriosityPics().subscribe(res => {
      const photos = this.sortByDate(res.photos);
      // this.photos = photos.slice(0, 15);
      this.photos = photos;
      console.log(this.photos);
    });
  }

  sortByDate(arr) {
    arr.sort((a, b) => {
      return Number(new Date(a.earth_date)) - Number(new Date(b.earth_date));
    });

    return arr;
  }
}
