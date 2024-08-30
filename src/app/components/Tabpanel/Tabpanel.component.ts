import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "tabpanel",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Tabpanel.component.html",
  styleUrls: ["./Tabpanel.component.css"],
})
export class Tabpanel {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() client2png: string = "";
  @Input() heading4VestaShufelt: string = "";
  @Input() executiveDirector: string = "";
}
