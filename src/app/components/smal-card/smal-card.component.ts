import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smal-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
  data = new Date
  ano:number = this.data.getFullYear()
  mes:number = this.data.getMonth()
  dia:number = this.data.getDay()

  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''

  @Input()
  Id:string = ''
}
