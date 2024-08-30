import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BackgroundBorder } from "../BackgroundBorder/BackgroundBorder.component";
@Component({
  selector: "services",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BackgroundBorder],
  templateUrl: "./Services.component.html",
  styleUrls: ["./Services.component.css"],
})
export class Services {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
