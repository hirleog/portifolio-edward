import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Tabpanel1 } from "../Tabpanel1/Tabpanel1.component";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";
@Component({
  selector: "news",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Tabpanel1, TitleSectionComponent],
  templateUrl: "./News.component.html",
  styleUrls: ["./News.component.css"],
})
export class News {
  title: string = 'Blog';

  @HostBinding("style.display") display = "contents";

  constructor() { }
}
