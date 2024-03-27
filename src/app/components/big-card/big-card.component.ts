import { Component, Input } from '@angular/core';
import { ContentComponent } from '../../pages/content/content.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ContentComponent, RouterLink,RouterLinkActive],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''

  @Input()
  Id:string = ""


}
