import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TitleSectionComponent } from '../../frame/title-section/title-section.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    TitleSectionComponent
  ],
})
export class FooterComponent implements OnInit {
  title: string = 'Contato';


  constructor() { }

  ngOnInit(): void {
  }

}
