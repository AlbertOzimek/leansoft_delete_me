import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
    selector: 'leansoft-nav',
    templateUrl: './leansoft-nav.component.html',
    styleUrls: ['./leansoft-nav.component.css']
})
export class LeansoftNavComponent {
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

    constructor(private breakpointObserver: BreakpointObserver) {
    }
}
