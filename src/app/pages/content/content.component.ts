import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {dataFake} from '../../data/dataFake'
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = 'https://media.istockphoto.com/id/1366052585/pt/foto/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?b=1&s=612x612&w=0&k=20&c=4Zvi0Ounnz8pMCSSbwhlUcZXPoNwrZPm3jfaBYjnRP0='
  @Input()
  cardTitle:string = 'Especialista explica qual a importância do cardio no dia a dia'
  @Input()
  cardDescription:string = 'A treinadora Lorem ipsun explica com detalhes os benefícios à saúde de fazer cardio e musculação, e como isso auxilia na perca de gostura e ganho de força.'

  private id:string|null = "1"


  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))
  }

  setValueToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photoCover = result.photo;



  }
}
