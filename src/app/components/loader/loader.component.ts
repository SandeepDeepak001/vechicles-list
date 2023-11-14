import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    @Input() noBackground: boolean;

    @HostBinding('style.background-color')
        bgColor = 'rgba(20, 21, 33, 0.8)';

    constructor() { }

    ngOnInit(): void {
        if(this.noBackground) {
            this.bgColor = 'transparent';
        }
    }

}
