import { Component, Input } from '@angular/core';
import { Idea } from './idea';
@Component({
    moduleId: module.id,
    selector: 'idea-card',
    templateUrl: 'idea-card.component.html',
    styleUrls: ['idea-card.component.css']
})
export class IdeaCardComponent {
    @Input()
    idea: Idea;
}