import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeansoftNavComponent} from './leansoft-nav/leansoft-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatCardModule, MatMenuModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
    declarations: [
        AppComponent,
        LeansoftNavComponent,
        ShowcaseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
