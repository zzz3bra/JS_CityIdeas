import { Component } from '@angular/core';
import { Idea } from './idea';
import { IdeaCardComponent } from './idea-card.component';
import { IDEAS} from './mock-ideas';
@Component({
    selector: 'app',
    template: `<table cellspading="0" cellpadding=0>
    <tr>
    <td *ngFor="let cur_idea of ideas">
        <idea-card [idea]="cur_idea"></idea-card>
    </td>
    </tr>
    </table>`,
    directives: [IdeaCardComponent],
})
export class AppComponent {
    ideas = IDEAS;
}