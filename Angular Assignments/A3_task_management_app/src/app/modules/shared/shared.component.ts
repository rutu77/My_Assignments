import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector:'shared',
    template:`<button class="shared" (click)="handleClick()">{{label}}</button>`,
    styleUrls:['./shared.component.css'],

    standalone:false
})

export class SharedComponent{
    @Input() label!:string;
    @Output() click= new EventEmitter<void>();

    handleClick(){
        this.click.emit();
    }
}
