import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Tabpanel } from "../Tabpanel/Tabpanel.component";
@Component({
  selector: "reviews",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Tabpanel],
  templateUrl: "./Reviews.component.html",
  styleUrls: ["./Reviews.component.css"],
})
export class Reviews {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
