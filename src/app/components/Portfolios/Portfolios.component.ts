import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "portfolios",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Portfolios.component.html",
  styleUrls: ["./Portfolios.component.css"],
})
export class Portfolios {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
