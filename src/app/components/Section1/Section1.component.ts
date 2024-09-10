import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";

@Component({
  selector: "section1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TitleSectionComponent],
  templateUrl: "./Section1.component.html",
  styleUrls: ["./Section1.component.css"],
})
export class Section1 {
  title: string = 'Resume';

  @HostBinding("style.display") display = "contents";

  constructor() {}
}
