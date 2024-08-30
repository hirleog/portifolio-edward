import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "tabpanel1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Tabpanel1.component.html",
  styleUrls: ["./Tabpanel1.component.css"],
})
export class Tabpanel1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() link: string = "";
  @Input() whatAreTheLatestTrendsInGraph: string = "";
  @Input() designAccordingToYou: string = "";
  /** Style props */
  @Input() propHeight: string | number = "";
  @Input() propHeight1: string | number = "";
  @Input() propFlex: string | number = "";
  @Input() propMaxHeight: string | number = "";
  @Input() propAlignSelf: string | number = "";
  @Input() propTextDecoration: string | number = "";

  get tabpanelStyle() {
    return {
      height: this.propHeight,
    };
  }

  get linkIconStyle() {
    return {
      height: this.propHeight1,
      flex: this.propFlex,
      "max-height": this.propMaxHeight,
    };
  }

  get newsDetailsStyle() {
    return {
      "align-self": this.propAlignSelf,
    };
  }

  get adminStyle() {
    return {
      "text-decoration": this.propTextDecoration,
    };
  }
}
