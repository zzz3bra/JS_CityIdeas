import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './idea';

@Pipe({ name: 'filterCategory' })
export class FilterCategoryPipe implements PipeTransform {

    transform(allIdeas: Idea[], filter: string): Idea[] {
        if (filter == '') {
            return allIdeas
        } else {
            return allIdeas.filter(idea => idea.category.toLocaleUpperCase() == filter.toLocaleUpperCase())
        }
    }
}
