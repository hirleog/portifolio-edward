import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";

@Component({
  selector: "section-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TitleSectionComponent],
  templateUrl: "./Section.component.html",
  styleUrls: ["./Section.component.css"],
})
export class Section {
  title: string = 'Habilidades';
  size: string = '38px'

  @HostBinding("style.display") display = "contents";

  constructor() { }
}
