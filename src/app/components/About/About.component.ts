import { Component, HostBinding, Input, input, ViewEncapsulation } from "@angular/core";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";

@Component({
  selector: "about",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TitleSectionComponent],
  templateUrl: "./About.component.html",
  styleUrls: ["./About.component.css"],
})
export class About {
  title: string = 'Sobre';
  @HostBinding("style.display") display = "contents";

  constructor() { }
}
