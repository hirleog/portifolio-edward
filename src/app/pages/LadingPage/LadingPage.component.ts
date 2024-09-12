import { Component, HostBinding, ViewEncapsulation } from "@angular/core";

import { About } from "../../components/About/About.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { NavComponent } from "../../components/nav/nav.component";
import { News } from "../../components/News/News.component";
import { Portfolios } from "../../components/Portfolios/Portfolios.component";
import { Reviews } from "../../components/Reviews/Reviews.component";
import { Section } from "../../components/Section/Section.component";
import { Section1 } from "../../components/Section1/Section1.component";
import { Services } from "../../components/Services/Services.component";
// import * as AOS from 'aos';  // Importação do AOS

@Component({
  selector: "lading-page",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FrameComponent,
    About,
    Services,
    Section,
    Section1,
    Portfolios,
    Reviews,
    News,
    NavComponent,
    FooterComponent,
  ],
  templateUrl: "./LadingPage.component.html",
  styleUrls: ["./LadingPage.component.css"],
})
// export class LadingPage implements OnInit {
export class LadingPage {
  @HostBinding("style.display") display = "contents";

  constructor() { }

  // ngOnInit(): void {
  //   AOS.init();  // Inicialização do AOS

  // }
}
