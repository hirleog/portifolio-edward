import { Component, OnInit } from "@angular/core";
import * as AOS from 'aos';  // Importando AOS corretamente

@Component({
  selector: "app-root",
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
