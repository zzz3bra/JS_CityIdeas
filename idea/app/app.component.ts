import { Component } from '@angular/core';
import { Idea } from './idea';
import { IdeaCardComponent } from './idea-card.component';
import { IDEAS} from './mock-ideas';
import { FilterTextPipe} from './filter-text.pipe';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [IdeaCardComponent],
    pipes: [FilterTextPipe]
})
export class AppComponent {
    ideas = IDEAS;
    findText = '';
}