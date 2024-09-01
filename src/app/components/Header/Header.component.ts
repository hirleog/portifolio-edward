import { Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "header-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Header.component.html",
  styleUrls: ["./Header.component.css"],
})
export class Header {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
