import { Component, OnInit } from '@angular/core';
import {YEARS} from '../years_list';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    years = YEARS;
    current_year = YEARS[0];

    constructor() { }

    ngOnInit() {
    }

    yearChanged(event) {
        this.current_year = event;
    }
}
