import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Tabpanel } from "../Tabpanel/Tabpanel.component";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";
@Component({
  selector: "reviews",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Tabpanel, TitleSectionComponent],
  templateUrl: "./Reviews.component.html",
  styleUrls: ["./Reviews.component.css"],
})
export class Reviews {
  title: string = 'Depoimentos';

  @HostBinding("style.display") display = "contents";

  constructor() { }
}
