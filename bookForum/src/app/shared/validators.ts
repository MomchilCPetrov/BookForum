import { AbstractControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter, startWith, switchMap } from 'rxjs/operators'

export function sameValueAsFactory (getTargetControl: () => AbstractControl | null) {
    let subscription: Subscription | null = null;
    return function (control: AbstractControl) {
        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
        }
        const targetControl = getTargetControl();
        if (!targetControl) {
            return null;
        }
        subscription = control.statusChanges.pipe(
            filter(() => false),
            startWith(null),
            switchMap(() => targetControl.valueChanges)
        ).subscribe({
            next: () => control.updateValueAndValidity(),
            complete: () => subscription = null
        })
        return targetControl?.value === control?.value ? null : { sameValue : true}
    }
}