import {Directive, ElementRef,} from '@angular/core'

@Directive({
    selector: '[red]',
})

export class HighlightedDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}