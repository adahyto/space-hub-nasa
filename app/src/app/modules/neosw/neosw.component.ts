import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ApiService } from 'src/app/shared/services/api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-neosw',
  templateUrl: './neosw.component.html',
  styleUrls: ['./neosw.component.scss']
})
export class NeoswComponent implements OnInit {
  form: FormGroup;
  neosw: any;
  displayedColumns: string[] = ['name', 'date', 'hazardous', 'sentry'];
  dataSource;
  any;
  loading = false;
  panelOpenState = false;

  constructor(private service: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      selected: {
        startDate: moment(Date.now()).format('YYYY-MM-DD'),
        endDate: moment(Date.now()).format('YYYY-MM-DD')
      }
    });
  }

  async searchAsteroids(startDate, endDate) {
    const res: Observable<any> = await this.service.getNEOSW(
      moment(startDate).format('YYYY-MM-DD'),
      moment(endDate).format('YYYY-MM-DD')
    );
    res.subscribe(data => {
      console.log(data);
      const neos: any = [];
      this.neosw = [];
      Object.keys(data.near_earth_objects).forEach(dateKey =>
        neos.push(data.near_earth_objects[dateKey])
      );
      neos.flat().map(neo => this.neosw.push(neo));
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.dataSource = this.neosw;
      }, 250);
    });
  }
}
