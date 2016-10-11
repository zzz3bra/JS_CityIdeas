import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IdeaCardComponent } from './idea-card.component';
import { FilterTextPipe } from './filter-text.pipe';
import { HighlightTextPipe } from './highlight-text.pipe';
import { HighlightClearPipe } from './highlight-clear.pipe';
import { FilterCategoryPipe } from './filter-category.pipe';
import { IdeaService } from './idea.service';
import { CategoriesService } from './categories.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, IdeaCardComponent, FilterTextPipe, FilterCategoryPipe, HighlightTextPipe, HighlightClearPipe],
    providers: [IdeaService, CategoriesService],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }