import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CONTENT_LIST } from '../content_list';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
    @Input('current_year') current_year: number;
    content_items = [];

    constructor() { }

    ngOnInit() {
        this.content_items = this._getContent();
    }

    ngOnChanges() {
        this.content_items = this._getContent();
    }

    _getContent() {
        return CONTENT_LIST.filter(item => item.year === this.current_year);
    }
}
