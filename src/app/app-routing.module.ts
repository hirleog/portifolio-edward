import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LadingPage } from "./pages/LadingPage/LadingPage.component";
const routes: Routes = [
  {
    path: "",
    component: LadingPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
