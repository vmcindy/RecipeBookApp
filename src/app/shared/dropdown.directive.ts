import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isShown = false;

    @HostListener('click') toggleShow() {
        this.isShown = !this.isShown;
    }

    constructor() {}
}
