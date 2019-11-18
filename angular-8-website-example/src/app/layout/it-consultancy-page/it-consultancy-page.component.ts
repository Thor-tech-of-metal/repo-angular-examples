import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-bs-element',
    templateUrl: './it-consultancy-page.component.html',
    styleUrls: ['./it-consultancy-page.component.scss'],
    animations: [routerTransition()]
})
export class ItConsultancyPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
