import { Component } from '@angular/core';
import {BigCardComponent} from '../../components/big-card/big-card.component';
import {MenuBarComponent} from '../../components/menu-bar/menu-bar.component'
import {MenuTitleComponent} from '../../components/menu-title/menu-title.component'
import {SmalCardComponent} from '../../components/smal-card/smal-card.component'
import { ContentComponent } from '../content/content.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ BigCardComponent, MenuBarComponent, MenuTitleComponent, SmalCardComponent,ContentComponent,RouterLink]
})
export class HomeComponent {

}
