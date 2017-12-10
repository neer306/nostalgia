import { Component } from '@angular/core';
import {YEARS} from './years_list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';
    years = YEARS;
    current_year = YEARS[0];

    yearChanged(event) {
        this.current_year = event;
    }
}
