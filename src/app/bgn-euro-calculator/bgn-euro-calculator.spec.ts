import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgnEuroCalculator } from './bgn-euro-calculator';

describe('BgnEuroCalculator', () => {
    let component: BgnEuroCalculator;
    let fixture: ComponentFixture<BgnEuroCalculator>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BgnEuroCalculator],
        }).compileComponents();

        fixture = TestBed.createComponent(BgnEuroCalculator);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
