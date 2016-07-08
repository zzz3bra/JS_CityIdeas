import { Component, Input } from '@angular/core';
import { Idea } from './idea';
@Component({
    selector: 'idea-card',
    template: `
    <div class=proposition>
                                <div class="proposition_picture">
                                    <img src={{idea.pictureUrl}}>
                                </div>
                                <span class="proposition_header">
                                    <p>{{idea.header}}</p>
                                </span>
                                <span class="proposition_text">
                                    <p>{{idea.content}}</p>
                                </span>
                                <span class="proposition_info">
                                    <span class="proposition_date">
                                        <p>{{idea.date}}</p>
                                    </span>
                                <span class="proposition_user">
                                        <p>{{idea.user}}</p>
                                    </span>
                                <span class="proposition_category">
                                        <p>{{idea.category}}</p>
                                    </span>
                                </span>
                                <hr>
                            </div>`
})
export class IdeaCardComponent {
    @Input()
    idea: Idea;
}