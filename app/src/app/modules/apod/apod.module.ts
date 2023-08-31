import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ApodRoutingModule } from "./apod-routing.module";
import { ApodComponent } from "./apod.component";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [ApodComponent],
  imports: [CommonModule, ApodRoutingModule, MatCardModule, MatButtonModule]
})
export class ApodModule {}
