import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
    isChecked = true;

    constructor() {
    }

    ngOnInit() {
    }

    onChange($event) {
        console.log('checkbox clicked');
    }

}
