import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea';
import highlightingConstants = require("./highlighting-constants");

@Pipe({ name: 'highlightClear' })
export class HighlightClearPipe implements PipeTransform {
    clearHighlight(idea: Idea): void {
        if (idea != null) {
            idea.content = idea.content.replace(highlightingConstants.leftSelectClear, "").replace(highlightingConstants.rightSelectClear, "");
            idea.header = idea.header.replace(highlightingConstants.leftSelectClear, "").replace(highlightingConstants.rightSelectClear, "");
        }
    }
    transform(ideas: Idea[]): Idea[] {
        if (ideas == null) {
            return ideas;
        }
        let cur_ideas: Idea[] = ideas.filter(idea => true);
        cur_ideas.forEach(idea => this.clearHighlight(idea));
        return cur_ideas;
    }
}
