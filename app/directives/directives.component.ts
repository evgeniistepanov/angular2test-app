import {Component} from '@angular/core'
import {HighlightedDirective} from './highlighted.directive'

@Component({
    selector: 'directives',
    template: `<h2>{{title}}</h2>
               <div><span red>Test custom directive</span></div>`,
    directives: [HighlightedDirective]
})

export class DirectivesComponent {
    public title : string = 'Directives Component';  
}