import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-item-preview',
  templateUrl: './content-item-preview.component.html',
  styleUrls: ['./content-item-preview.component.css']
})


export class ContentItemPreviewComponent implements OnInit {
    @Input('data') data;

    constructor() { }

    ngOnInit() {
    }

}
