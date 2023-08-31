import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuriosityComponent } from "./curiosity.component";
import { CuriosityRoutingModule } from "./curiosity-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [CuriosityComponent],
  imports: [CommonModule, CuriosityRoutingModule, MatCardModule, MatButtonModule]
})
export class CuriosityModule {}
