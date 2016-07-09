import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea';

@Pipe({ name: 'filterText' })
export class FilterTextPipe implements PipeTransform {

    transform(allIdeas: Idea[], filter: string): Idea[] {
        if (filter == '') {
            return allIdeas
        } else {
            return allIdeas.filter(idea => idea.content.toLocaleUpperCase().indexOf(filter.toLocaleUpperCase()) > -1 || idea.header.toLocaleUpperCase().indexOf(filter.toLocaleUpperCase()) > -1)
        }
    }
}
