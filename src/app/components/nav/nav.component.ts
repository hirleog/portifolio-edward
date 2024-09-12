import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule
  ],
})
export class NavComponent implements OnInit {

  public openClose: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public menu() {
    this.openClose = !this.openClose;
  }

}
