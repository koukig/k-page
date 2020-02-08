import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { TopPageComponent } from "./top-page/top-page.component";

const routes: Routes = [{ path: "", component: TopPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
