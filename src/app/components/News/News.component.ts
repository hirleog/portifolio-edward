import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Tabpanel1 } from "../Tabpanel1/Tabpanel1.component";
@Component({
  selector: "news",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Tabpanel1],
  templateUrl: "./News.component.html",
  styleUrls: ["./News.component.css"],
})
export class News {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
