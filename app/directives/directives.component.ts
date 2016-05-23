import {Component} from '@angular/core'

@Component({
    selector: 'directives',
    template: `<h2>{{title}}</h2>`,
    
})

export class DirectivesComponent {
    public title : string = 'Directives Component';  
}