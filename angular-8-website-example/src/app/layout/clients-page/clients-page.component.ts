import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-bs-element',
    templateUrl: './clients.-page.component.html',
    styleUrls: ['./clients-page.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
