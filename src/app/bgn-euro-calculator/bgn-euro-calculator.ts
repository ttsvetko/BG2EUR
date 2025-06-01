import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-bgn-euro-calculator',
    templateUrl: './bgn-euro-calculator.html',
    styleUrl: './bgn-euro-calculator.css',
    imports: [MatCardModule, MatFormFieldModule, MatInput, MatIcon, ReactiveFormsModule, MatButton],
})
export class BgnEuroCalculator {
    formGroup = new FormGroup({
        bgn: new FormControl(0, [Validators.required, Validators.min(0)]),
        euro: new FormControl(0, [Validators.required, Validators.min(0)]),
    });

    constructor() {
        this.formGroup.controls.bgn.valueChanges.pipe(takeUntilDestroyed()).subscribe({
            next: value => {
                if (!value) {
                    this.formGroup.controls.euro.setValue(0, { emitEvent: false });
                    return;
                }

                this.formGroup.controls.euro.setValue(this.formatValue(value / 1.95583), {
                    emitEvent: false,
                });
            },
        });

        this.formGroup.controls.euro.valueChanges.pipe(takeUntilDestroyed()).subscribe({
            next: value => {
                if (!value) {
                    this.formGroup.controls.bgn.setValue(0, { emitEvent: false });
                    return;
                }
                this.formGroup.controls.bgn.setValue(this.formatValue(value * 1.95583), {
                    emitEvent: false,
                });
            },
        });
    }

    private formatValue(value: number) {
        return Number(Number.parseFloat(String(value)).toFixed(2));
    }

    clear(formControl: FormControl) {
        formControl.reset(0);
    }
}
