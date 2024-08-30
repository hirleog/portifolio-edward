import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "section-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Section.component.html",
  styleUrls: ["./Section.component.css"],
})
export class Section {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
