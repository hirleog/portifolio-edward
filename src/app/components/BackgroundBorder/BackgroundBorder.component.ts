import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "background-border",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./BackgroundBorder.component.html",
  styleUrls: ["./BackgroundBorder.component.css"],
})
export class BackgroundBorder {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() backgroundBorder: string = "";
  @Input() heading2UIUXDesign: string = "";
  @Input() cardContent: string = "";
  /** Style props */
  @Input() propAlignSelf: string | number = "";
  @Input() propAlignSelf1: string | number = "";
  @Input() propDisplay: string | number = "";
  @Input() propMinWidth: string | number = "";
  @Input() propFlex: string | number = "";

  get frameDivStyle() {
    return {
      "align-self": this.propAlignSelf,
    };
  }

  get frameDiv1Style() {
    return {
      "align-self": this.propAlignSelf1,
    };
  }

  get heading2Style() {
    return {
      display: this.propDisplay,
      "min-width": this.propMinWidth,
      flex: this.propFlex,
    };
  }
}
