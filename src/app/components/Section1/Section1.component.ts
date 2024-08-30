import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "section1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Section1.component.html",
  styleUrls: ["./Section1.component.css"],
})
export class Section1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
