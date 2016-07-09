import { Component } from '@angular/core';
import { Idea } from './idea';
import { IdeaCardComponent } from './idea-card.component';
import { IdeaService} from './idea.service';
import { CategoriesService} from './categories.service';
import { FilterTextPipe} from './filter-text.pipe';
import { FilterCategoryPipe} from './filter-category.pipe';
import { OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [IdeaCardComponent],
    providers: [IdeaService, CategoriesService],
    pipes: [FilterTextPipe, FilterCategoryPipe]
})
export class AppComponent implements OnInit {
    ideas: Idea[];
    categories: string[];
    findText = '';
    selectedCategory = '';
    constructor(private ideaService: IdeaService, private categoriesService: CategoriesService) { }
    onSelect(category: string) {
        if (category == this.categories[0]) {
            this.selectedCategory = '';
        } else {
            this.selectedCategory = category;
        }
    }
    getIdeas() {
        this.ideaService.getIdeas().then(ideas => this.ideas = ideas);
    }
    getCategories() {
        this.categoriesService.getCategories().then(categories => this.categories = categories);
    }
    ngOnInit() {
        this.getIdeas();
        this.getCategories();
    }
}