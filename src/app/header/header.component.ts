import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Input('years') years: number[];
    @Input('current_year') current_year: number;
    @Output() yearChanged = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    onChange(event) {
        // this.current_year = parseInt(event.target.value, 10);
        this.yearChanged.emit(parseInt(event.target.value, 10));
    }
}
