import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  menuShow(){
    let menuMobile = document.querySelector('.mobile__menu-bar')
    if (menuMobile?.classList.contains('open')){
      menuMobile.classList.remove('open');
    }else{
      menuMobile?.classList.add('open')

    }

  }

}

