import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BgnEuroCalculator } from './bgn-euro-calculator/bgn-euro-calculator';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        BgnEuroCalculator,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatIcon,
    ],
})
export class App {
    protected title = 'BG2EUR';
    protected readonly Array = Array;
}
