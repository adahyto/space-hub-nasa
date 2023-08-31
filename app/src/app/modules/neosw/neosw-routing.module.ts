import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NeoswComponent } from "./neosw.component";

const routes: Routes = [
  {
    path: "",
    component: NeoswComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeoswRoutingModule {}
