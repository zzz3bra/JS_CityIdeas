import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea';
import highlightingConstants = require("./highlighting-constants");

@Pipe({ name: 'highlightText' })
export class HighlightTextPipe implements PipeTransform {
    private highlight(idea: Idea, filter: string): void {
        let pos: number = 0;
        while (true) {
            var foundPos = idea.content.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase(), pos);
            if (foundPos == -1) break;
            idea.content = idea.content.substring(0, foundPos) + highlightingConstants.leftSelect + idea.content.substr(foundPos, filter.length) + highlightingConstants.rightSelect + idea.content.substring(foundPos + filter.length, idea.content.length);
            pos = foundPos + highlightingConstants.rightSelectLength + highlightingConstants.leftSelectLength + 1;
        }
        pos = 0;
        while (true) {
            var foundPos = idea.header.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase(), pos);
            if (foundPos == -1) break;
            idea.header = idea.header.substring(0, foundPos) + highlightingConstants.leftSelect + idea.header.substr(foundPos, filter.length) + highlightingConstants.rightSelect + idea.header.substring(foundPos + filter.length, idea.header.length);
            pos = foundPos + highlightingConstants.rightSelectLength + highlightingConstants.leftSelectLength + 1;
        }
    }
    transform(ideas: Idea[], text: string): Idea[] {
        if (ideas == null) {
            return ideas;
        }
        let cur_ideas: Idea[] = ideas.filter(idea => true);
        if (text != "") {
            cur_ideas.forEach(idea => this.highlight(idea, text));
        }
        return cur_ideas;
    }
}
