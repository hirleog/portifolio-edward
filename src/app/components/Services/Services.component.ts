import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BackgroundBorder } from "../BackgroundBorder/BackgroundBorder.component";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";
@Component({
  selector: "services",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BackgroundBorder, TitleSectionComponent],
  templateUrl: "./Services.component.html",
  styleUrls: ["./Services.component.css"],
})
export class Services {
  title: string = 'Serviços';
  @HostBinding("style.display") display = "contents";

  constructor() { }
}
