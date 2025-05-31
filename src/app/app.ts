import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BgnEuroCalculator } from './bgn-euro-calculator/bgn-euro-calculator';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [MatSidenavModule, MatToolbarModule, BgnEuroCalculator],
})
export class App {
    protected title = 'BG2EUR';
    protected readonly Array = Array;
}
