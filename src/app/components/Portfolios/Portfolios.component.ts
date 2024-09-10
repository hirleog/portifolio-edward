import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";

@Component({
  selector: "portfolios",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TitleSectionComponent],
  templateUrl: "./Portfolios.component.html",
  styleUrls: ["./Portfolios.component.css"],
})
export class Portfolios {
  title: string = 'Portfolio';

  @HostBinding("style.display") display = "contents";

  constructor() { }
}
