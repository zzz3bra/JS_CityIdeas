import { Component, Input, OnInit } from '@angular/core';
import { Idea } from './idea';
import { IdeaService } from './idea.service';
import { CategoriesService } from './categories.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [IdeaService, CategoriesService]
})
export class AppComponent implements OnInit {
    ideas: Idea[];
    categories: string[];
    map: any;
    @Input()
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