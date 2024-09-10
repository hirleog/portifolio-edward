import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { TitleSectionComponent } from "../../frame/title-section/title-section.component";

@Component({
  selector: "frame-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TitleSectionComponent],
  templateUrl: "./FrameComponent1.component.html",
  styleUrls: ["./FrameComponent1.component.css"],
})
export class FrameComponent1 {
  title: string = 'Contato';

  @HostBinding("style.display") display = "contents";

  constructor() { }
}
