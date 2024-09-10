import { Component, ViewEncapsulation, HostBinding, OnInit } from "@angular/core";

import { Header } from "../../components/Header/Header.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { About } from "../../components/About/About.component";
import { Services } from "../../components/Services/Services.component";
import { Section } from "../../components/Section/Section.component";
import { Section1 } from "../../components/Section1/Section1.component";
import { Portfolios } from "../../components/Portfolios/Portfolios.component";
import { Reviews } from "../../components/Reviews/Reviews.component";
import { News } from "../../components/News/News.component";
import { FrameComponent1 } from "../../components/FrameComponent1/FrameComponent1.component";
// import * as AOS from 'aos';  // Importação do AOS

@Component({
  selector: "lading-page",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    Header,
    FrameComponent,
    About,
    Services,
    Section,
    Section1,
    Portfolios,
    Reviews,
    News,
    FrameComponent1,
  ],
  templateUrl: "./LadingPage.component.html",
  styleUrls: ["./LadingPage.component.css"],
})
// export class LadingPage implements OnInit {
export class LadingPage {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  // ngOnInit(): void {
  //   AOS.init();  // Inicialização do AOS

  // }
}
